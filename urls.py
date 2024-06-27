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
from Database import views
from Database.utiles import *
from Database.views import *
from supersonic import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'account', AccountViewSet) #done
router.register(r'Audio', AudioViewSet) #done
router.register(r'Pre_pro_audio', Pre_pro_audioViewSet)
router.register(r'Enhanced_audio', Enhanced_audioViewSet)
router.register(r'upscaled_audio', upscaled_audioViewSet)
router.register(r'RVC_Audio', RVC_AudioViewSet)
router.register(r'Evaluation', EvaluationViewSet)

# router.register(r'Audio', AudioViewSet)




urlpatterns = [
    path('', include(router.urls)),
    path("admin/", admin.site.urls),
    # path('video/<int:pk>/', video_detail, name='video_detail'),
    path('upload/', upload_video, name='upload_video'),
    path('upload-video-with-subtitles/', views.upload_video_with_subtitles, name='upload_video_with_subtitles'),

    
]
# urlpatterns = [
#     path("admin/", admin.site.urls),
# ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
