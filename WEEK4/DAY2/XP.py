#EX1
def display_message():
    print("I am learning Python programming in this course.")

display_message()

#EX2
def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

#EX3
def describe_city(city, country="Mauritius"):
    print(f"{city} is in {country}.")

describe_city("Port Louis")
describe_city("Reykjavik", "Iceland")

#EX4
import random

def random_game(number):
    random_number = random.randint(1, 100)
    
    if number == random_number:
        print("Success! Both numbers are the same:", number)
    else:
        print("Fail!")
        print("Your number:", number)
        print("Random number:", random_number)

random_game(25)

#EX5
def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")


make_shirt()
make_shirt(size="Medium")
make_shirt(size="Small", text="Python is awesome!")
make_shirt(text="Code. Sleep. Repeat.", size="Extra Large")

#EX6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"
make_great(magician_names)
show_magicians(magician_names)
