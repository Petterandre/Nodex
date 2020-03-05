from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Manga(models.Model):
    title = models.CharField(max_length=100)
    descr = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)
    owner = models.ForeignKey(
        User, related_name="manga", on_delete=models.CASCADE, null=True
    )
    url = models.CharField(max_length=150)
    adult = models.BooleanField(default=False)


class Chapter(models.Model):
    title = models.CharField(max_length=100)
    rel_manga = models.ForeignKey(Manga, on_delete=models.CASCADE)
    pub_date = models.DateField()
