from django.urls import path
from .views import MetaDataListView

urlpatterns = [
    path('',MetaDataListView.as_view())
]
