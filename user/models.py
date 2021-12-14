
from django.db import models

from django.contrib.auth.models import User

from PIL import Image
from django.utils.html import mark_safe

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete= models.CASCADE, verbose_name ="Kullanıcı"  )
    profile_image = models.ImageField(blank  = True ,null= True , default ="/profile/user.png" , upload_to ="profile/" ,verbose_name="Kullanıcı fotografı ")
    
    introduce = models.CharField(max_length=150 , null=True,blank=True  )
    
    twitterAdress = models.CharField(max_length=150 , null=True,blank=True  )
    
    followers =models.ManyToManyField(User,related_name='Takipçiler',blank=True)
    following =models.ManyToManyField(User,related_name='Takip_ettiklerim',blank=True)
    
    def image_save(self):
        return mark_safe('<img src ="%s" width="50"  height ="50" /> ' % (self.profile_image.url) )
    
    def __str__(self):
        return  self.user.username 
    def saveas(self):
        super().save()
        img = Image.open(self.profile_image.path)
        if img.height > 250 or img.width > 250 : 
            output_size = (250,250)
            img.thumbnail(output_size)
            img.save(self.profile_image.path)