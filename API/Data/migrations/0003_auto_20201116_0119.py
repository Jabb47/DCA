# Generated by Django 3.1.2 on 2020-11-15 23:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Data', '0002_metadata_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='DBMetaData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataBaseName', models.CharField(blank=True, default='', max_length=255)),
                ('data_store_type', models.CharField(blank=True, default='', max_length=255)),
                ('storage_location', models.URLField(default='')),
                ('database_table', models.CharField(blank=True, default='', max_length=255)),
                ('field_name', models.CharField(blank=True, default='', max_length=255)),
                ('category', models.CharField(blank=True, default='', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='SpreadSheetMetaData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('spreadSheetName', models.CharField(blank=True, default='', max_length=255)),
                ('data_store_type', models.CharField(blank=True, default='', max_length=255)),
                ('file_location', models.URLField(default='')),
                ('tab_name', models.CharField(blank=True, default='', max_length=255)),
                ('column_name', models.CharField(blank=True, default='', max_length=255)),
                ('category', models.CharField(blank=True, default='', max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='MetaData',
        ),
    ]