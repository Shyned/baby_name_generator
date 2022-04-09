from django.db import models

# Create your models here.
class Baby_namer:
    name = models.CharField(_(""), max_length=50)
    