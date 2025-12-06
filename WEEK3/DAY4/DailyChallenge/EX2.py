word = input("Enter a word: ")

new_word = word[0]  

for char in word[1:]:  
    if char != new_word[-1]:
        new_word += char

print(new_word)