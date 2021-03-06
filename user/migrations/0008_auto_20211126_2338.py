# Generated by Django 3.1.4 on 2021-11-26 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0021_article_slug'),
        ('user', '0007_auto_20210129_2232'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='introduce',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='readList',
            field=models.ManyToManyField(blank=True, to='article.Article', verbose_name='Kullanıcın'),
        ),
    ]
