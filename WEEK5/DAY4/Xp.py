#EX1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"


class Bengal(Cat):
    def sing(self, sounds):
        return sounds


class Chartreux(Cat):
    def sing(self, sounds):
        return sounds

class Siamese(Cat):
    pass

bengal_cat = Bengal("Leo", 3)
chartreux_cat = Chartreux("Milo", 5)
siamese_cat = Siamese("Luna", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]
sara_pets = Pets(all_cats)
sara_pets.walk()

#EX2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        power_self = self.run_speed() * self.weight
        power_other = other_dog.run_speed() * other_dog.weight

        if power_self > power_other:
            return f"{self.name} wins the fight!"
        elif power_self < power_other:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 18)
dog3 = Dog("Max", 4, 22)

print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog3))

#EX3
import random
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet.")

dog_a = PetDog("Fido", 2, 10)
dog_b = PetDog("Buddy", 4, 18)
dog_c = PetDog("Max", 3, 15)

dog_a.train()
dog_a.play(dog_b, dog_c)
dog_a.do_a_trick()

#EX4
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(
                        f"You are over 18, your parents Jane and John accept "
                        f"that you will go out with your friends"
                    )
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found in the family.")

    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, {member.age} years old")

my_family = Family("Smith")

my_family.born("Anna", 17)
my_family.born("Tom", 20)
my_family.born("Lucy", 25)

my_family.check_majority("Anna")
my_family.check_majority("Tom")

my_family.family_presentation()
