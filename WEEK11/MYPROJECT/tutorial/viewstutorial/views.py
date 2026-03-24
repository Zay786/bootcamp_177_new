from urllib import request

from django.shortcuts import render,HttpResponse

from viewstutorial.models import student    
from django.shortcuts import redirect
from django.http import JsonResponse

def message(request):
    return render(request, 'hello world')

def home(request):  
    return HttpResponse('Welcome to Django Views Tutorial')

def homepage(request):
  students = student.objects.all()
  return render(request, 'home.html',{'students':students})      
def form_submission(request):
  return render(request,'form.html')

def submit(request):

    if request.method == "POST":

        name = request.POST.get('name')
        age = request.POST.get('age')
        course = request.POST.get('course')
        course_type = request.POST.get('course_type')

        student.objects.create(
            name=name,
            age=age,
            course=course,
            course_type=course_type
        )

    return redirect('homepage')

def edit_student(request, id):

    s = student.objects.get(id=id)

    if request.method == "POST":
        s.course = request.POST.get('course')
        s.course_type = request.POST.get('course_type')
        s.save()

        return redirect('homepage')

    return render(request, 'edit_student.html', {'student': s})

def delete_student(request, id):

    s = student.objects.get(id=id)
    s.delete()

    return redirect('homepage')

def api_students(request):
   data = {'count': student.objects.count(),'status': 'success'}
   return JsonResponse(data)
  
    #return render(request, 'home.html',
     #{ 
       #'name': 'Tutorials',   
       #'username': 'Zaynah', 
       #'students': [{'name': 'Zaynah', 'age': 25,'course': 'Django'}, 
                   # {'name': 'Ahmed', 'age': 30,'course': 'Python'}, 
                  #  {'name': 'Fatima', 'age': 28,'course': 'JavaScript'}]
   #  } )



