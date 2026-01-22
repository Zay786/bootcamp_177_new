class AnagramChecker:
    def __init__(self, word_list_file="word_list.txt"):
        with open(word_list_file, "r") as file:
            self.words = set(word.strip().lower() for word in file)

    def is_valid_word(self, word):

        return word.lower() in self.words

    def is_anagram(self, word1, word2):

        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):

        word = word.lower()
        anagrams = []

        for w in self.words:
            if w != word and self.is_anagram(word, w):
                anagrams.append(w)

        return anagrams
