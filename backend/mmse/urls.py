
from .views import save_survey_response
from .views import LoginView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PatientViewSet
from . import views
from .views import UserCreateAPIView


router = DefaultRouter()
router.register(r'patients', PatientViewSet)



urlpatterns = [
     path('save-survey-response/', save_survey_response, name='save-survey-response'),
     path('login/', LoginView.as_view(), name='login'),
     path('', include(router.urls)),
     path('api/user/', UserCreateAPIView.as_view(), name='user_create'),

    
]