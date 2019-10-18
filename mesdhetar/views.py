from django.shortcuts import render
from . models import Plate
# Create your views here.

def index(request): 	
    		#Geerar contadores de algunos objetos	
    		num_plates= Plate.objects.all().count()	

    		#Renderiza la plantilla Html index.html con los datos en las variables contexto	
    		return render(	
        		request,	
        		'index.html',	
        		context={'num_plates':num_plates},	
    		)