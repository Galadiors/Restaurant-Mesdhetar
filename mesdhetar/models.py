from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns
import uuid # Required for unique book instances
# Create your models here.


class Plate(models.Model):
    
	name = models.CharField(max_length=200)
	summary = models.TextField(max_length=1000)
    
	def __str__(self):
		return self.name
    
	def get_absolute_url(self):
		"""Returns the url to access a detail record for this plate."""
		return reverse('plate-detail', args=[str(self.id)])

