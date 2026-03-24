from django.urls import path
from . import views

urlpatterns = [
    path('', views.message, name='message'),
    path('message/', views.message, name='message'),
    path('home/', views.home, name='home'),
    path('homepage/', views.homepage, name='homepage'),

    path('form/', views.form_submission, name='form_submission'),
    path('submit/', views.submit, name='submit'),

    path('edit/<int:id>/', views.edit_student, name='edit_student'),
    path('delete/<int:id>/', views.delete_student, name='delete_student'),

    path('students/', views.api_students, name='api_students'),
]