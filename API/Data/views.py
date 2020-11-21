from rest_framework.response  import Response
from rest_framework.views import APIView
from rest_framework import permissions, viewsets
from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import DataFile
from .serializers import DataFileSerializer
from .dataRead import read_db , read_excell


class DataClassifyView(APIView):
    permission_classes = (permissions.AllowAny,)
    queryset = DataFile.objects.all()
    serializer_class = DataFileSerializer

    def post(self , request, *args, **kwargs):
        data_file = request.data['data_file']

        df = DataFile.objects.create(file_data  = data_file)
        df.save()
        return Response({"message" : "File uploaded"}, status=200)
 

        












       