# Generated by Django 3.1.4 on 2021-01-29 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_auto_20210128_0207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_image',
            field=models.ImageField(blank=True, default='/profile/user.png', null=True, upload_to='profile/', verbose_name='Kullanıcı fotografı '),
        ),
    ]