# EX1

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))
print(result)

result = {keys[i]: values[i] for i in range(len(keys))}
print(result)


#EX2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name.capitalize()} pays: ${price}")
    total_cost += price

print("Total family cost:", total_cost)
