from django.db import models

# Create your models here.
class DBMetaData(models.Model):
    dataBaseName = models.CharField(max_length=255, blank=True ,default="")
    data_store_type =  models.CharField(max_length=255, blank=True, default="")
    storage_location = models.URLField(max_length=200,default="")
    database_table   = models.CharField(max_length=255, blank=True, default="")
    field_name  = models.CharField(max_length=255, blank=True, default="")
    category   = models.CharField(max_length=255, blank=True, default="")


class SpreadSheetMetaData(models.Model):
    spreadSheetName = models.CharField(max_length=255, blank=True ,default="")
    data_store_type =  models.CharField(max_length=255, blank=True, default="")
    file_location = models.URLField(max_length=200,default="")
    tab_name   = models.CharField(max_length=255, blank=True, default="")
    column_name  = models.CharField(max_length=255, blank=True, default="")
    category   = models.CharField(max_length=255, blank=True, default="")