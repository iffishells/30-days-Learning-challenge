"""first_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import  url
from django.contrib import admin
from django.urls import path
from first_app import  views
from django.conf.urls import  include

# adding include function in the project file which
# url.py can help as in this way we can create the url.py in the Application
# folder then use the url.py file form that place we dont need to switch the
# appp to project again and again

urlpatterns = [
    url(r'^$', views.index , name= 'index'),
    #url('', views.index, name='indexS' ),
    url('admin/', admin.site.urls),
    url(r'^first_app/' , include('first_app.url'))
]
