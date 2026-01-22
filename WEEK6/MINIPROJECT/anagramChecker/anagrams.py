from anagram_checker import AnagramChecker


def show_menu():
    print("\n--- ANAGRAM CHECKER ---")
    print("1. Enter a word")
    print("2. Exit")


def get_user_word():
    user_input = input("Enter a word: ").strip()
    if len(user_input.split()) != 1:
        print("❌ Error: Please enter only ONE word.")
        return None
    if not user_input.isalpha():
        print("❌ Error: Only alphabetic characters are allowed.")
        return None

    return user_input


def main():
    checker = AnagramChecker()

    while True:
        show_menu()
        choice = input("Choose an option (1 or 2): ").strip()

        if choice == "2":
            print("👋 Goodbye!")
            break

        elif choice == "1":
            word = get_user_word()
            if not word:
                continue

            is_valid = checker.is_valid_word(word)
            anagrams = checker.get_anagrams(word)

            print("\nYOUR WORD:", word.upper())
            if is_valid:
                print("This is a valid English word.")
            else:
                print("This is NOT a valid English word.")

            if anagrams:
                print("Anagrams for your word:", ", ".join(anagrams))
            else:
                print("No anagrams found.")

        else:
            print("❌ Invalid choice. Please select 1 or 2.")


if __name__ == "__main__":
    main()
