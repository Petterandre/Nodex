# Generated by Django 3.0.3 on 2020-03-03 09:33

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('manga', '0002_manga_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='manga',
            name='adult',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='manga',
            name='url',
            field=models.CharField(default=django.utils.timezone.now, max_length=150),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Chapter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('pub_date', models.DateField()),
                ('rel_manga', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='manga.Manga')),
            ],
        ),
    ]