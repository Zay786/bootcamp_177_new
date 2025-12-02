import random
secretnumber = random.randint(1,100)
for guesstaken in range(1,10):
    print('Guess the secret number')
    guess = int(input())
    if guess < secretnumber:
        print('Too low.')
    elif guess > secretnumber:
        print('Too high.')
    else:
        print('You got it!')
        break
else:
 print('Bad luck!The secret number was' + str(secretnumber))

