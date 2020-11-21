from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


def upload_path(instance , fileName):
    return '/'.join(['datafiles',fileName])

# Create your models here.

class DataFile(models.Model):
    file_data =  models.FileField(upload_to=upload_path)

