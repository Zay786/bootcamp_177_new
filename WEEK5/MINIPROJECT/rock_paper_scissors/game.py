import random


class Game:
    def __init__(self):
        self.items = ["rock", "paper", "scissors"]

    def get_user_item(self):
        while True:
            user_choice = input("Choose rock, paper, or scissors: ").lower()
            if user_choice in self.items:
                return user_choice
            print("Invalid choice. Please try again.")

    def get_computer_item(self):
        return random.choice(self.items)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"

        winning_cases = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper"
        }

        if winning_cases[user_item] == computer_item:
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        if result == "win":
            message = "You win!"
        elif result == "loss":
            message = "You lose!"
        else:
            message = "It's a draw!"

        print(
            f"You selected {user_item}. "
            f"The computer selected {computer_item}. "
            f"{message}"
        )

        return result
