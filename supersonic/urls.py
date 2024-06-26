"""
URL configuration for SuperSonic project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers
from Database.views import *
from django.urls import path



router = routers.DefaultRouter()
router.register(r'account', AccountViewSet)
router.register(r'audio', AudioViewSet)
router.register(r'Pre_pro_audio', Pre_pro_audioViewSet)
router.register(r'Enhanced_audio', Enhanced_audioViewSet)
router.register(r'upscaled_audio', upscaled_audioViewSet)
router.register(r'RVC_Audio', RVC_AudioViewSet)
router.register(r'Evaluation', EvaluationViewSet)
#router.register(r'run-python-script', RunPythonScriptView.as_view())  # Add this line


urlpatterns = [
    path('', include(router.urls)),
    path("admin/", admin.site.urls),
    path("run-python-script/", RunPythonScriptView.as_view()),  
    path('login/', LoginView.as_view()),  
    path('check-username/', CheckUsernameView.as_view(), name='check_username'),  # Add a comma here
    path('api/files', get_file_names),
]

# urlpatterns = [
#     path("admin/", admin.site.urls),
# ]
