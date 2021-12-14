# Generated by Django 3.1.4 on 2021-11-26 22:19

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('article', '0021_article_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='readList',
            field=models.ManyToManyField(blank=True, related_name='readList', to=settings.AUTH_USER_MODEL),
        ),
    ]
