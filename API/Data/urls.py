from django.urls import path , include
from rest_framework import routers
from .views import DataClassifyView


urlpatterns = [
    path('classify/', DataClassifyView.as_view()),
    
]
