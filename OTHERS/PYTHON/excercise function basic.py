Python 3.13.5 (tags/v3.13.5:6cb20a2, Jun 11 2025, 16:15:46) [MSC v.1943 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.

def add_two_numbers(a, b):
    return a + b


result = add_two_numbers(5,3)
print(result)
8

def greet("name"):
    
SyntaxError: invalid syntax
def greet('name):
          
SyntaxError: unterminated string literal (detected at line 1)
def greet(name):
    print(f"Hello, {name}!")

    
greet("Karen")
Hello, Karen!

def check_even_odd(number):
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

        
check_even_odd(5)
Odd


def sum_list(numbers):
    return sum(numbers)

sum_list([3,4,5,6])
18


def print_days():
    days = ["Sunday","Monday","Tuesaday","Wednesday","Thursday","Friday","Saturday"]
    for day in days:
        print(day)

        
print_days()
Sunday
Monday
Tuesaday
Wednesday
Thursday
Friday
Saturday


def check_sign(number):
    if number < 0 :
        print("Negative")
        elif number == 0 :
            
SyntaxError: invalid syntax
def check_sign(number):
    if number < 0:
        print("Negative")
    elif number == 0:
        print("Zero")
    else number > 0:
        
SyntaxError: expected ':'
def check_sign(number):
    if number < 0:
        print("Negative")
  elif number == 0:
        print("Zero")
  else number > 0:
      
SyntaxError: unindent does not match any outer indentation level
def check_sign(number):
    if number > 0:
        print("Positive")
    elif number < 0:
        print("Negative")
    else:
        print("Zero")

        
def find_largest(numbers):
    return man(numbers)

find_largest(3,4,5,10,1,5)
Traceback (most recent call last):
  File "<pyshell#49>", line 1, in <module>
    find_largest(3,4,5,10,1,5)
TypeError: find_largest() takes 1 positional argument but 6 were given
find_largest(3,4,5,6,10)
Traceback (most recent call last):
  File "<pyshell#50>", line 1, in <module>
    find_largest(3,4,5,6,10)
TypeError: find_largest() takes 1 positional argument but 5 were given
>>> def find_largest(numbers):
...     return max(numbers)
... 
>>> find_largest(3,4,5,5,6,10)
Traceback (most recent call last):
  File "<pyshell#53>", line 1, in <module>
    find_largest(3,4,5,5,6,10)
TypeError: find_largest() takes 1 positional argument but 6 were given
>>> find_largest([3,4,5,6,7,5,10])
10
>>> 
>>> 
>>> def check_letter(word,letter)
SyntaxError: expected ':'
>>> def check_letter(word,letter):
...     return letter in word
... 
>>> check_letter("Apple","p")
True
>>> def count_to_number(n):
...     for i in range(1,n+1):
...         print(i)
... 
...         
>>> count_to_number(10)
1
2
3
4
5
6
7
8
9
10
