#ex1
import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        """Calculate the perimeter (circumference) of the circle"""
        return 2 * math.pi * self.radius

    def area(self):
        """Calculate the area of the circle"""
        return math.pi * (self.radius ** 2)

    def definition(self):
        """Print the geometrical definition of a circle"""
        print("A circle is a set of points in a plane that are at a given distance (radius) from a given point (center).")

c = Circle(5)
print("Perimeter:", c.perimeter())
print("Area:", c.area())
c.definition()

#ex2
import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reversed_list(self):
        """Return reversed list"""
        return self.letters[::-1]

    def sorted_list(self):
        """Return sorted list"""
        return sorted(self.letters)

    def random_number_list(self):
        """Generate a list of random numbers with same length as letters"""
        return [random.randint(1, 100) for _ in self.letters]

mylist = MyList(['a', 'd', 'c', 'b'])
print("Original:", mylist.letters)
print("Reversed:", mylist.reversed_list())
print("Sorted:", mylist.sorted_list())
print("Random numbers:", mylist.random_number_list())

#ex3
class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        self.menu.append({"name": name, "price": price, "spice": spice, "gluten": gluten})
        print(f"Added {name} to menu.")

    def update_item(self, name, price, spice, gluten):
        for item in self.menu:
            if item["name"] == name:
                item["price"] = price
                item["spice"] = spice
                item["gluten"] = gluten
                print(f"{name} updated successfully.")
                return
        print(f"{name} is not in the menu.")

    def remove_item(self, name):
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)
                print(f"{name} removed. Updated menu:")
                print(self.menu)
                return
        print(f"{name} is not in the menu.")

if __name__ == "__main__":
    manager = MenuManager()
    manager.add_item("Pasta", 20, "A", True)
    manager.update_item("Salad", 20, "B", False)
    manager.remove_item("Hamburger")
