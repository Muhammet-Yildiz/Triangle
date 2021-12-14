from django.contrib import admin
from .models import Article,Topic

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    search_fields = ["title"]
    list_display = ["title","author","created_date","readDuration"]
    list_display_links =["title","created_date"]
    list_filter = ["created_date"]
    class Meta :
         model = Article


admin.site.register(Topic)
