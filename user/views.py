from django.shortcuts import render,redirect,get_object_or_404

from django.contrib.auth.decorators import login_required

from .forms import RegisterForm
from .forms import LoginForm
from .models import Profile

from django.contrib.auth.models import User 
from django.contrib.auth import login,authenticate,logout

from django.contrib import messages



def register(request) :
    all_user = User.objects.all().order_by("username")
    all_email = User.objects.all()
    form = RegisterForm(request.POST or None)
    if  form.is_valid() :
        email =form.cleaned_data.get("email")
        username = form.cleaned_data.get("username")

        password = form.cleaned_data.get("password")

        newUser = User(username=username,email=email )
        newUser.set_password(password)

        newUser.save()

        login(request,newUser)

        messages.success(request,"Başarıyla kayıt oldunuz  Giriş yapınız ")

        return redirect("index")

    else :
        context = {
            "form" : form ,
            "all_user":all_user,
            "all_email":all_email
        }
        return render(request,"register.html",context)




def loginUser(request):
    form = LoginForm(request.POST or None )
    context = {
        "form" : form 
    }

    if form.is_valid() :

        email = form.cleaned_data.get("email")
        password = form.cleaned_data.get("password")
        user =authenticate(email =email,password =password)
        if user is  None :
            messages.info(request,"Email  veya Parola  yanlış ")
            return render(request,"login.html",context)
        else :
            messages.success(request,"Başarıyla giriş yaptınız ")
            login(request, user)
            return redirect("index")
 
    else :
        return render(request,"login.html",context)



def logoutUser(request):    
    logout(request) 
    messages.success(request,"Başarıyla cıkış yaptınız ")
    return redirect("index")




def about(request,user) :

    targetUser = User.objects.filter(username = user )
    context={
        "targetUser" :targetUser 
    }
    
    return render(request,"about.html" ,context)


def UserFollowersPage(request , user ) : 
    targetUser = User.objects.filter(username = user )
    recentUser = get_object_or_404( User, username = user )

    followers =recentUser.profile.followers.all()
    context={
        "targetUser" :targetUser ,
        "followers":followers
    }
    return render(request,"userFollowersPage.html" ,context)
