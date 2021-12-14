"""ddsada URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
# file upload için gereken işlemler 
from django.conf import settings
from django.conf.urls.static import static


from django.contrib.auth import views as auth_views

# from article.views import index

from article import views 
from user import views  as userWiews
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index,name ="index"),
    path('register/',userWiews.register,name="register"),
    path('login/',userWiews.loginUser,name="login"),
    path('logout/',userWiews.logoutUser,name="logout"),
    path('articles/',include("article.url")),
    path('story/<str:username>/<str:articleslug>/<int:id>',views.storyDetail,name="storyDetail"),
    path('readList/@<str:user>', views.readListPage,name ="readListPage"),
    path('about/@<str:user>', userWiews.about,name ="about"),
    path('stories/@<str:user>', views.stories,name ="stories"),
    path('addClapToStory/<int:storyId>', views.addClapToStory,name ="addClapToStory"),
    path('deleteStory/<int:storyId>', views.deleteStory,name ="deleteStory"),
    path('removeFromStoryReadlist/<int:storyId>', views.removeFromStoryReadlist,name ="removeFromStoryReadlist"),
    path('new-story/', views.newStory,name ="newStory"),
    path('edit-story/<str:storyTitle>/<int:id>', views.editStory,name ="editStory"),
    path('follow/', views.follow,name ="follow"),
    path('unfollow/', views.unfollow,name ="unfollow"),
    path('followers/<str:user>', userWiews.UserFollowersPage,name ="UserFollowersPage"),
    path('tag/<str:tagname>', views.tagDetail,name ="tagDetail"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

