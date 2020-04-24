from django.shortcuts import render
from django.http import  HttpResponse



# Create your views here.

def index(request):
    my_dict = {
    "insertme" : "Hi am newone from the view of seconed project"
    }
    return render(request,"second_app/index.html" , context = my_dict)
