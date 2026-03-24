from django.db import models
from django.utils import timezone  

class student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    course = models.CharField(max_length=100)
    created_at = models.DateTimeField(default=timezone.now)
    course_type = models.CharField(max_length=50,
                                        choices=[('Django', 'Django'), 
                                                    ('Python', 'Python'), 
                                                    ('JavaScript', 'JavaScript')],
                                        default='Django')   

    def __str__(self):
        return f'{self.name} - {self.course}'
    

