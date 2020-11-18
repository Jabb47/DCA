from rest_framework.response  import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import DBMetaData
from .serializers import DBMetaDataSerializer 
from .dataRead import read_db , read_excell
class DBMetaDataListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = DBMetaData.objects.all()
    serializer_class = DBMetaDataSerializer
    pagination_class = None

class DataClassifyView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        data_file =  data['data_file']
        file_type = data['file_type']

        if file_type == "xlsx":
           return Response(read_excell(data_file))
        else:
            return Response(read_db(data_file))

        












       