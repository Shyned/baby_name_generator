from django.shortcuts import render
import random
from rest_framework import status
from rest_framework.decorators import api_view
from .serializer import NameSerializer
from .models import Baby_namer


# Create your views here.
@api_view(['GET'])
def random_name():
    pass