Python 3.13.5 (tags/v3.13.5:6cb20a2, Jun 11 2025, 16:15:46) [MSC v.1943 64 bit (AMD64)] on win32
Enter "help" below or click "Help" above for more information.
import random
secretnumber = random.randint(1,20)
for guesstaken in range(1,8):
    print('Guess the secret number')
    guess = int(input())

    
Guess the secret number
for guesstaken in range(1,8):
    print('Guess the secret number')
    guess = int(input())
Traceback (most recent call last):
  File "<pyshell#5>", line 3, in <module>
    guess = int(input())
ValueError: invalid literal for int() with base 10: 'for guesstaken in range(1,8):'
for guesstaken in range(1,8):
    print('Guess the secret number')
    guess = int(input())
    if guess < secretnumber:
        print('Too low.')
    elif guess > secretnumber:
        print('Too high.')
    elif guess = secretnumber:
        
SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?
for guesstaken in range(1,8):
    print('Guess the secret number')
    guess = int(input())
    if guess < secretnumber:
        print('Too low.')
    elif guess > secretnumber:
        print('Too high.')
    elif guess == secretnumber:
        print('You got it!')
...     else:
...         break
... 
...     
Guess the secret number
Traceback (most recent call last):
  File "<pyshell#16>", line 3, in <module>
    guess = int(input())
ValueError: invalid literal for int() with base 10: "    print('Guess the secret number')"
>>> 5
5
>>> secretnumber = random.randint(1,100)
... for guesstaken in range(1,8):
...     print('Guess the secret number')
...     guess = int(input())
...     
SyntaxError: multiple statements found while compiling a single statement
>>> secretnumber = random.randint(1,100)
>>> for guesstaken in range(1,8):
...     print('Guess the secret number')
...     guess = int(input())
...     if guess < secretnumber:
...         print('Too low.')
...     elif guess > secretnumber:
...         print('Too high.')
...     elif guess == secretnumber:
...         print('You got it!')
...     else:
...         break
... 
...     
Guess the secret number
Traceback (most recent call last):
  File "<pyshell#21>", line 3, in <module>
    guess = int(input())
ValueError: invalid literal for int() with base 10: '    guess = int(input())'
