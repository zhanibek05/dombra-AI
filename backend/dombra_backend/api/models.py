from django.db import models


class File(models.Model):
    file = models.FileField(upload_to='uploads/')
# Create your models here.
