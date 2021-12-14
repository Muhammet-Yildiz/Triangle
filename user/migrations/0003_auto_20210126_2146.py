# Generated by Django 3.1.4 on 2021-01-26 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_auto_20210122_2310'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='user',
            new_name='username',
        ),
        migrations.AlterField(
            model_name='profile',
            name='profile_image',
            field=models.ImageField(blank=True, default='default.jpg ', null=True, upload_to='profile/', verbose_name='Kullanıcı fotografı '),
        ),
    ]
