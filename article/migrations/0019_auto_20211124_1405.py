# Generated by Django 3.1.4 on 2021-11-24 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0018_auto_20211124_1354'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='readDuration',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='recommed',
            field=models.CharField(default=' ', max_length=50, verbose_name='Önerilme Durumu'),
        ),
    ]
