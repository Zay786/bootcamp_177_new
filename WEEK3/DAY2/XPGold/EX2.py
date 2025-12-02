month = int(input("Enter the month number (1-12): "))

if 3 <= month <= 5:
    print("It's Spring!")
elif 6 <= month <= 8:
    print("It's Summer!")
elif 9 <= month <= 11:
    print("It's Autumn!")
elif month == 12 or month == 1 or month == 2:
    print("It's Winter!")
else:
    print("Invalid month number. Please enter a number between 1 and 12.")
