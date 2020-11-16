from django.db import models

# Create your models here.
class MetaData(models.Model):
    text =  models.CharField(max_length=100)
    name = models.TextField(max_length=1000 , default='')