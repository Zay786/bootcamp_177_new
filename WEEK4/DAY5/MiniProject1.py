def create_board():
    """Initialize a 3x3 Tic Tac Toe board."""
    return [[" " for _ in range(3)] for _ in range(3)]

def display_board(board):
    """Display the current state of the board."""
    print("\n")
    for i, row in enumerate(board):
        print(" | ".join(row))
        if i < 2:
            print("--+---+--")
    print("\n")

def player_input(player):
    """Get valid input from the player (row and column)."""
    while True:
        try:
            row = int(input(f"Player {player} - Enter row (0, 1, 2): "))
            col = int(input(f"Player {player} - Enter column (0, 1, 2): "))
            if row in range(3) and col in range(3):
                return row, col
            else:
                print("Invalid input. Row and column must be 0, 1, or 2.")
        except ValueError:
            print("Invalid input. Please enter numbers only.")

def is_cell_empty(board, row, col):
    """Check if a specific cell is empty."""
    return board[row][col] == " "

def update_board(board, row, col, player):
    """Place the player's symbol on the board."""
    board[row][col] = player

def check_win(board, player):
    """Check if the player has won."""
    
    for row in board:
        if all(cell == player for cell in row):
            return True
   
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def check_tie(board):
    """Check if the board is full without a winner."""
    return all(cell != " " for row in board for cell in row)

def switch_player(player):
    """Switch between 'X' and 'O'."""
    return "O" if player == "X" else "X"

def play():
    """Main game loop."""
    board = create_board()
    current_player = "X"
    
    while True:
        display_board(board)
        row, col = player_input(current_player)
        
        if not is_cell_empty(board, row, col):
            print("Cell already taken! Try again.")
            continue
        
        update_board(board, row, col, current_player)
        
        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins! 🎉")
            break
        
        if check_tie(board):
            display_board(board)
            print("It's a tie! 🤝")
            break
        
        current_player = switch_player(current_player)

if __name__ == "__main__":
    print("Welcome to Tic Tac Toe!")
    play()
