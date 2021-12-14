from django.contrib import admin
from django.urls import path
from . import views 

app_name ="article"

urlpatterns = [
    path('checkReadList/',views.checkReadList,name="checkReadList"),
]

