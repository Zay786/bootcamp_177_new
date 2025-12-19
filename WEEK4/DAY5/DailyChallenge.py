#EX1
words_input = input("Enter words separated by commas: ")
words_list = words_input.split(",")
words_list.sort()
sorted_words = ",".join(words_list)
print("Sorted words:", sorted_words)


#EX2
def longest_word(sentence):
    words = sentence.split()
    max_length = 0
    longest = ""
    for word in words:
        if len(word) > max_length:
            max_length = len(word)
            longest = word
    return longest

print(longest_word("Margaret's toy is a pretty doll."))        
print(longest_word("A thing of beauty is a joy forever."))     
print(longest_word("Forgetfulness is by all means powerless!"))
