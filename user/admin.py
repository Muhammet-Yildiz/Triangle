from django.contrib import admin

from .models import Profile
@admin.register(Profile)
class ProductAdmin(admin.ModelAdmin):
    list_display= ["user","introduce","image_save"]
    list_display_links = ["image_save","user" ]
    list_filter = ["user"]
  
