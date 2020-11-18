from django.urls import path
from .views import DBMetaDataListView , DataClassifyView

urlpatterns = [
    path('',DBMetaDataListView.as_view()),
    path('classify/', DataClassifyView.as_view())
]
