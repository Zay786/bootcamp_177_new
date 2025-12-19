
#EX1
def get_full_name(first_name, last_name, middle_name=""):
    """Return full name. Middle name is optional."""
    if middle_name:  # If middle_name is provided
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title()  # Capitalize first letters

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))  # John Hooker Lee
print(get_full_name(first_name="bruce", last_name="lee"))  # Bruce Lee


#EX2

MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    ' ': '/' 
}


MORSE_TO_TEXT = {v: k for k, v in MORSE_CODE_DICT.items()}

def english_to_morse(text):
    """Convert English text to Morse code."""
    text = text.upper()
    morse_list = [MORSE_CODE_DICT.get(char, '') for char in text]
    return ' '.join(morse_list)

def morse_to_english(morse_code):
    """Convert Morse code to English text."""
    words = morse_code.split(' / ')
    decoded_words = []
    for word in words:
        letters = word.split()
        decoded_word = ''.join(MORSE_TO_TEXT.get(letter, '') for letter in letters)
        decoded_words.append(decoded_word)
    return ' '.join(decoded_words)

english_text = "Hello World"
morse = english_to_morse(english_text)
print("Morse Code:", morse)

decoded = morse_to_english(morse)
print("Decoded Text:", decoded)
