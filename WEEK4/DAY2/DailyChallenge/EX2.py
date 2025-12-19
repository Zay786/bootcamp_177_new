import random


list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728


seen = {}
pairs = []

for number in list_of_numbers:
    complement = target_number - number
    if complement in seen and seen[complement] > 0:
        pairs.append((complement, number))
    else:
        if number in seen:
            seen[number] += 1
        else:
            seen[number] = 1

print(f"Found {len(pairs)} pairs that sum to {target_number}:")
for a, b in pairs:
    print(a, "+", b, "=", target_number)
