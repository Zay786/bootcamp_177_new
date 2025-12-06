word = input("Enter a word: ")

letter_index_dict = {}

for index, letter in enumerate(word):
    if letter in letter_index_dict:
        letter_index_dict[letter].append(index)
    else:
        letter_index_dict[letter] = [index]

print(letter_index_dict)
