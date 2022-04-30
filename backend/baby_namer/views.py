import random
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializer import NameSerializer
from .models import Baby_namer


# Create your views here.
@api_view(['GET'])
def random_name(request):
    names = Baby_namer.objects.all()
    name_list=list(names)
    ran_name=random.choice(name_list)
    serializer = NameSerializer(ran_name)
    return Response(serializer.data)
    