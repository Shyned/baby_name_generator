from django.db import models

# Create your models here.
class Baby_namer (models.Model):
    name = models.CharField(max_length = 255)
    