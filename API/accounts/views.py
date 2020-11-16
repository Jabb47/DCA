from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response  import Response
from rest_framework.views import APIView
from rest_framework import permissions


class SignUpView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        name =  data['name']
        email =  data['email']
        password =  data['password']
        password2 =  data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error: Email already exisits'})
            else:
                if len(password) < 8 :
                    return Response({'error': 'Password too short'})
                else:
                    user = User.objects.create_user(email=email , name=name , password=password)
                    user.save()
                    return Response({'success': 'User created Successfully'})
        else:
            return Response({'error': 'Passords do not match'})