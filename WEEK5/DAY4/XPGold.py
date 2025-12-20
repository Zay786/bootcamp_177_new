class BankAccount:
    def __init__(self, balance=0, username="", password=""):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        return False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Deposit amount must be positive")

        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdraw amount must be positive")

        self.balance -= amount
        return self.balance
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, username="", password="", minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdraw amount must be positive")

        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw: minimum balance would be violated")

        self.balance -= amount
        return self.balance
