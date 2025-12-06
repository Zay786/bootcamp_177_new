def encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            # Handle uppercase letters
            if char.isupper():
                result += chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
            # Handle lowercase letters
            else:
                result += chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
        else:
            # Non-alphabetic characters remain the same
            result += char
    return result

def decrypt(text, shift):
    # Decryption is just encryption with negative shift
    return encrypt(text, -shift)

print("Welcome to Caesar Cipher!")
choice = input("Do you want to encrypt or decrypt? (e/d): ").lower()

if choice not in ['e', 'd']:
    print("Invalid choice. Please enter 'e' to encrypt or 'd' to decrypt.")
else:
    message = input("Enter your message: ")
    shift = int(input("Enter the shift number: "))

    if choice == 'e':
        encrypted_message = encrypt(message, shift)
        print("Encrypted message:", encrypted_message)
    else:
        decrypted_message = decrypt(message, shift)
        print("Decrypted message:", decrypted_message)
