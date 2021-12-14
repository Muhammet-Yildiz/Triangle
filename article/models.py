from django.contrib.auth.models import User
from django.db import models

from ckeditor.fields import RichTextField
from Django.utils import unique_slug_generator 
from django.db.models.signals import pre_save


class Topic(models.Model) : 

    title = models.CharField(max_length=100 , verbose_name="Konu Basligi")
    slug = models.SlugField(max_length=250,null=True, blank = True )
       
    def __str__(self ):
        return self.title
    class Meta :
        verbose_name_plural = 'Taglar'
        
        
def slug_generator(sender,instance, *args ,**kwargs ) : 
    if not instance.slug :
        instance.slug = unique_slug_generator(instance)
        
pre_save.connect(slug_generator,sender =Topic)


    
    
class Article(models.Model) :

    author =models.ForeignKey("auth.User",on_delete= models.CASCADE,verbose_name='Yazar')
    title = models.CharField(max_length=250,verbose_name='title')
    slug = models.SlugField(max_length=250,null=True, blank = True )
    content = RichTextField(verbose_name='Content')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='Oluşturulma Tarihi')
    article_image = models.FileField(blank =True , null = True ,verbose_name = "Makaleye Fotograf yükleyin " )
    topic =models.ManyToManyField(Topic,verbose_name='Konular',blank=True)
    recommed = models.CharField(max_length=50,verbose_name='Önerilme Durumu',default=" ")
    readDuration = models.IntegerField(default=0 ,null=True , blank= True )   
    readList = models.ManyToManyField("auth.User" ,blank=True    ,related_name="readList" )
    clapNumber = models.IntegerField(default=0 ,null=True , blank= True )  
    clapUser = models.ManyToManyField(User,related_name='Makaleyi_alkislayan_kullanicilar',blank=True )  
     
  
    def __str__(self):
        return self.title
    class Meta :
        ordering =['-created_date']
        
        
pre_save.connect(slug_generator,sender =Article)


