from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', LoginView.as_view()),
    path('login/', include('login.urls')),
    path('admin/', admin.site.urls),
]