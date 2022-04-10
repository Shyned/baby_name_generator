from rest_framework import serializers
from .models import Baby_namer




class NameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baby_namer
        fields = ['name']