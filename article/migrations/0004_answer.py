# Generated by Django 3.1.4 on 2021-01-01 17:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_comment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer_author', models.CharField(max_length=35, verbose_name='isim')),
                ('answer_content', models.CharField(max_length=100, verbose_name='Cevap')),
                ('answer_date', models.DateTimeField(auto_now_add=True)),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='relate_answer', to='article.comment', verbose_name='Yorum')),
            ],
        ),
    ]
