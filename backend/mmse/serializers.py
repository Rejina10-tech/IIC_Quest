# survey/serializers.py

from rest_framework import serializers
from .models import SurveyResponse
from .models import Patient

class SurveyResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurveyResponse
        fields = '__all__'

    def to_internal_value(self, data):
        """
        Map the rating scale values to the desired range.
        """
        mapped_data = data.copy()
        for key, value in data.items():
            # Map the values based on the provided rating scale
            if value == 0:
                mapped_data[key] = 0  # Did not apply to me at all
            elif value == 1:
                mapped_data[key] = 1  # Applied to me to some degree, or some of the time
            elif value == 2:
                mapped_data[key] = 2  # Applied to me to a considerable degree, or a good part of time
            elif value == 3:
                mapped_data[key] = 3  # Applied to me very much, or most of the time
        return mapped_data

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    
    
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'