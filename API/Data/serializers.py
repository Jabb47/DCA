from rest_framework import serializers
from .models import DBMetaData, SpreadSheetMetaData

class DBMetaDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DBMetaData
        fields = '__all__'

class SpreadSheetMDSerializer(serializers.ModelSerializer):
    class Meta:
        model: SpreadSheetMetaData
        fields = '__all__'