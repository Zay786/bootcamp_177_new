import random

wordslist = [
    'correction', 'childish', 'beach', 'python', 'assertive', 
    'interference', 'complete', 'share', 'credit card', 'rush', 'south'
]


word = random.choice(wordslist).lower()
guessed_letters = set()
wrong_guesses = 0
max_wrong = 6
display = [" " if char == " " else "*" for char in word]
stages = [
    """
      -----
      |   |
          |
          |
          |
          |
    --------
    """,
    """
      -----
      |   |
      O   |
          |
          |
          |
    --------
    """,
    """
      -----
      |   |
      O   |
      |   |
          |
          |
    --------
    """,
    """
      -----
      |   |
      O   |
     /|   |
          |
          |
    --------
    """,
    """
      -----
      |   |
      O   |
     /|\\  |
          |
          |
    --------
    """,
    """
      -----
      |   |
      O   |
     /|\\  |
     /    |
          |
    --------
    """,
    """
      -----
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    --------
    """
]

print("Welcome to Hangman!")
print("Guess the word:")
print("".join(display))

while wrong_guesses < max_wrong and "*" in display:
    guess = input("Guess a letter: ").lower()
    
    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter.")
        continue
    
    if guess in guessed_letters:
        print(f"You already guessed '{guess}'. Try another letter.")
        continue
    
    guessed_letters.add(guess)
    
    if guess in word:
        for i, char in enumerate(word):
            if char == guess:
                display[i] = guess
        print("Good guess!")
    else:
        wrong_guesses += 1
        print(f"Wrong guess! You have {max_wrong - wrong_guesses} tries left.")
    

    print(stages[wrong_guesses])
    print("".join(display))
    print("Guessed letters:", ", ".join(sorted(guessed_letters)))

if "*" not in display:
    print("Congratulations! You guessed the word:", word)
else:
    print("Game over! The word was:", word)
