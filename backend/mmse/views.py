from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SurveyResponseSerializer
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from .serializers import LoginSerializer
from django.contrib.auth import login
from django.http import JsonResponse
from rest_framework import viewsets
from .models import Patient
from .serializers import PatientSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Patient
import json

class UserCreateAPIView(APIView):
    def post(self, request, format=None):
        # Handle user creation logic here
        return Response(status=status.HTTP_201_CREATED)

@csrf_exempt
def user_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        age = data.get('age')
        
        if name and age:
            user = Patient.objects.create(name=name, age=age)
            return JsonResponse({'message': 'User created successfully', 'user_id': user.id}, status=201)
        else:
            return JsonResponse({'error': 'Name and Age are required fields'}, status=400)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

@api_view(['POST'])
def save_survey_response(request):
    serializer = SurveyResponseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            try:
                user = authenticate(request, username=username, password=password)
                if user is not None:
                    login(request, user)
                    token, _ = Token.objects.get_or_create(user=user)
                    return JsonResponse({'token': token.key}, status=status.HTTP_200_OK)
                else:
                    return JsonResponse({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            except Exception as e:
                return JsonResponse({'error': 'An error occurred during authentication'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
