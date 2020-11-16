from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import MetaData
from .serializers import MetaDataSerializer

class MetaDataListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = MetaData.objects.all()
    serializer_class = MetaDataSerializer
    pagination_class = None


