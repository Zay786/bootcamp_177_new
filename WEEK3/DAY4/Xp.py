# Exercise 1
my_fav_numbers = {3, 7, 12}
print("My favorite numbers:", my_fav_numbers)
my_fav_numbers.add(15)
my_fav_numbers.add(20)
print("After adding numbers:", my_fav_numbers)
my_fav_numbers.remove(20)
print("After removing last added number:", my_fav_numbers)
friend_fav_numbers = {5, 7, 30}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Combined set:", our_fav_numbers)

#Exercise 2
numbers_tuple = (1, 2, 3, 4)
try:
    numbers_tuple.append(5)  # This will fail
except AttributeError:
    print("Tuples are immutable — you cannot add items.")
new_tuple = numbers_tuple + (5, 6)
print("New tuple:", new_tuple)

# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print("After removing Banana:", basket) 
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apples_count = basket.count("Apples")
print("Apples appear:", apples_count, "times")
basket.clear()
print("Final basket:", basket)

# Exercise 4
nums = []
x = 1.5
while x <= 5:
    nums.append(x)
    x += 0.5

print(nums)

# Exercise 5
for i in range(1, 21):
    print(i)

print("---")

for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# Exercise 9

ages = []
total_cost = 0

while True:
    age_input = input("Enter age (or 'done' to finish): ")

    if age_input.lower() == "done":
        break

    age = int(age_input)
    ages.append(age)

    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15

    total_cost += cost

print("Total ticket cost: $", total_cost)        