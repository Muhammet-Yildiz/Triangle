# Generated by Django 3.1.4 on 2021-12-10 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0024_auto_20211203_2031'),
    ]

    operations = [
        migrations.AddField(
            model_name='topic',
            name='slug',
            field=models.SlugField(blank=True, max_length=250, null=True),
        ),
    ]