from django.shortcuts import render,redirect,get_object_or_404,reverse
from django.contrib import messages
from .models import Article, Topic
from  .forms import ArticlesForm
from django.contrib.auth.models import User

from django.contrib.auth.decorators import login_required

from django.http import JsonResponse

from random import randint
import json      
from .models import Article

def index(request) :
    
    articles = Article.objects.order_by('?')
    
    topics = Topic.objects.order_by('?')[:8]
    
    followUsers = User.objects.exclude(username = request.user ).order_by('?')[:3] 
    
    readList =[]
    for article in articles : 
        
        if(article.readList.filter(id=request.user.id).exists()):
            
            readList.append(article)
            
    
    context ={
        'articles' :articles,
        'topics' : topics,
        'followUsers':followUsers,
        "readList":readList 
    }

    return render(request,"index.html",context)


@login_required(login_url="login")
def newStory(request) :
    
    tags = Topic.objects.order_by("?")
    form = ArticlesForm(request.POST or None ,request.FILES or None ) 
    
    if form.is_valid() :
        story = form.save(commit=False)   
        
        story.author =request.user         
      
        print( request.POST.getlist('topic'))
        value = int( randint(1, 13))
        
        story.readDuration = value
        recommeds =["Based on your reading history" ,"Popular on Triangle"]
        story.recommed =recommeds[ int( randint(0, 1))]
        story.save()      
        tagindexArr = request.POST.getlist('topic')
        for index in  tagindexArr :
            
            story.topic.add(index)
        
        
        return redirect(reverse("stories",kwargs={"user": request.user  } ))
    
     
    context ={"form" :form ,"tags":tags}
    return render(request, "newStory.html",context)

def storyDetail(request ,username,articleslug,id ):
   
    
    article = get_object_or_404(Article ,id =id )

    
    context ={
        'article':article
        
    }
    return render(request , "detail.html",context)
                           
                           
def checkReadList(request):
    
    data = json.loads(request.body)
    articleId = data['articleId']
    article = get_object_or_404(Article , id =articleId)
    
    if request.user.is_authenticated : 

        if (  article.readList.filter(id =request.user.id).exists()):
            article.readList.remove(request.user.id)
            
        else :
            article.readList.add(request.user.id)
            
        
    return JsonResponse({'data':articleId })                         
                                                                                    
@login_required(login_url="login")
def readListPage(request,user ) :
    
    if(user != request.user.username) :
        return redirect(reverse("readListPage",kwargs={"user": request.user.username  } ))
    
    
    readList =[]
    
    articles = Article.objects.all() 
    for article in articles : 
        
        print(article)
        if(article.readList.filter(id=request.user.id).exists()):
            
            readList.append(article)
            
    length =len(readList)
    context ={
        "readList":readList,
        "length":length
    }
        
    return render(request , "readListPage.html",context)

    
def stories(request ,user  ) :
    
    user = get_object_or_404(User ,username = user )
    
    stories =Article.objects.filter(author =user)
    Author =user
    context ={
        "stories" :stories,
        "Author":Author
    }
    return render(request, "stories.html",context)
      
      
def addClapToStory(request, storyId) : 
   
   if (request.user.is_authenticated) : 
       
        story = get_object_or_404(Article,id =storyId )
        
        if story.clapUser.filter(id =request.user.id).exists() : 
            pass
        else :
            story.clapUser.add(request.user)
        
        story.clapNumber +=1 
        
        story.save()
    
        context ={
            "clapNumber": story.clapNumber
        }
    
        return JsonResponse(context)


def removeFromStoryReadlist(request ,storyId ) :
    
    story = get_object_or_404(Article,id =storyId )
    

    story.readList.remove(request.user)
    
    context ={
        "message": True ,
        "removeItemId" : storyId
    }
    return JsonResponse(context)
    
    

    
def deleteStory(request ,storyId ) :

    story = get_object_or_404(Article,id =storyId )

    story.delete() 
    
    context ={
        "success": True,
        "message" :"Makale basarıyla sılındı " 
    }
    return JsonResponse(context)


    
def editStory(request ,storyTitle ,id ) :  
    tags = Topic.objects.order_by("?")
    story = get_object_or_404(Article, id =id )
    
    activeTags=[]
    for tag in  story.topic.all() : 
        activeTags.append(tag)

    if (story.author != request.user) :
        return redirect("index")
    
    form =ArticlesForm(request.POST or None , request.FILES or None  ,instance=story )
   
    if form.is_valid() :
        story = form.save(commit=False )

        story.author = request.user

        story.save()
        
        for tag in story.topic.all() :
            story.topic.remove(tag) 
            
        tagindexArr = request.POST.getlist('topic')
        for index in  tagindexArr :
            story.topic.add(index)
   
        return redirect(reverse("stories",kwargs={"user": request.user  } ))
    
    
    else :
        return render(request ,"editStory.html",{"form":form ,"tags":tags,"story":story})
    

def follow(request):
    data = json.loads(request.body)
    frm = data['from'] 
    to = data['to']
    
    fromUser = get_object_or_404(User , username = frm)
    toUser = get_object_or_404(User , username = to)
    
    
    fromUser.profile.following.add(toUser)
    toUser.profile.followers.add(fromUser)
    
    context={
        "success" :True,
        "follow":"kullanıcı basarıyla takıp ettı ",
        "Takip edicek kişi" :fromUser.username,
        "Takip edilen kişi" :toUser.username
        
    }
    
    return JsonResponse(context)


def unfollow(request):
    
    data = json.loads(request.body)
    frm = data['from'] 
    to = data['to']
    
    fromUser = get_object_or_404(User , username = frm)
    toUser = get_object_or_404(User , username = to)
    
    fromUser.profile.following.remove(toUser)
    toUser.profile.followers.remove(fromUser)
    
    
    context={
        "success" :True,
        "follow":"kullanıcı  takıpten çıktı ",
        "Takipten cıkan kısı " :fromUser.username,
        "Bu user takıp edılmıyor " :toUser.username
    }
    
    return JsonResponse(context)
    


def tagDetail(request , tagname ) : 

    tag = get_object_or_404(Topic ,slug =tagname )
    topics = Topic.objects.order_by('?')[:8]
    
    stories = Article.objects.order_by('?')     

    targetStories = []
    for story in stories :
        if(  tag in story.topic.all())  :
            targetStories.append(story)  
    
    
    writerImages =[]
    
    
    for story  in targetStories :
        writerImages.append(story.author.profile.profile_image.url) 
    
        
    writerImages = list(set(writerImages))
    
    followUsers = User.objects.exclude(username = request.user ).order_by('?')[:5] 
    
    readList =[]
    for story in stories : 
        
        if(story.readList.filter(id=request.user.id).exists()):
            
            readList.append(story)
            
    context ={
        "success" :True ,
        "tagname" : tag.title,
        "stories" :targetStories,
        "followUsers":followUsers,
        "readList":readList ,
        "topics" :topics,
        "writerImages":writerImages
    }
    
    return render(request , "tagDetail.html " , context )


