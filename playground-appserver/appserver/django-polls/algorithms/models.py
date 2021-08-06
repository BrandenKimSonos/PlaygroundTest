from django.db import models


class Message(models.Model):
    name = models.CharField(max_length=100)
