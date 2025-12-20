import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"

    def __repr__(self):
        return str(self)


class Deck:
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = []
        self.shuffle()  # initialize deck with all 52 cards

    def shuffle(self):
        # Create full deck of 52 cards
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
        random.shuffle(self.cards)  # Shuffle in-place

    def deal(self):
        if len(self.cards) == 0:
            return None  # No cards left
        card = self.cards[0]
        # Remove card manually without using pop
        new_cards = []
        for i in range(1, len(self.cards)):
            new_cards.append(self.cards[i])
        self.cards = new_cards
        return card
deck = Deck()

print("Dealing 5 cards:")
for _ in range(5):
    card = deck.deal()
    print(card)

print("\nRemaining cards in deck:", len(deck.cards))

deck.shuffle()
print("\nDeck shuffled. Top card now is:", deck.cards[0])
