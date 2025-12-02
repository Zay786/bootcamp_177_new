#Exercise 1//

print("Hello world\nHello world\nHello world\nHello world")

#Exercise 2//
print((99**3) * 8)

#Exercise 3//
# >>> 5 < 3
# False — 5 is not smaller than 3.

# >>> 3 == 3
# True — both are integers with the same value.

# >>> 3 == "3"
# False — one is an integer, the other is a string.

# >>> "3" > 3
# Error — Python cannot compare a string and an integer.

# >>> "Hello" == "hello"
# False — string comparison is case-sensitive.


#Exercise 4//
computer_brand = "HP"  
print(f"I have a {computer_brand} computer.")

#Exercise 5//
name = "Zaynah"       
age = 25             
shoe_size = 38     

info = f"My name is {name}, I am {age} years old, and my shoe size is {shoe_size}."

print(info)


#Exercise 9//
height = int(input("Enter your height in cm: "))

if height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow a bit more to ride.")