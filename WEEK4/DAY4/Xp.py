#ex1
import random

def get_random_temp(season=None):
    """Generate a random temperature (float) based on season."""
    low, high = -10, 40
    
    if season:
        season = season.lower()
        if season == "winter":
            low, high = -10, 16
        elif season == "spring":
            low, high = 5, 24
        elif season == "summer":
            low, high = 20, 40
        elif season in ["autumn", "fall"]:
            low, high = 5, 25

    return round(random.uniform(low, high), 1) 

def main():
   
    month = int(input("Enter the month number (1-12): "))
    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    else:
        season = "autumn"

    temp = get_random_temp(season)
    print(f"The temperature right now is {temp}°C.")

   
    if temp < 0:
        advice = "Brrr, that’s freezing! Wear some extra layers today."
    elif 0 <= temp <= 16:
        advice = "Quite chilly! Don’t forget your coat."
    elif 17 <= temp <= 23:
        advice = "Nice weather! Light jacket should be enough."
    elif 24 <= temp <= 32:
        advice = "Warm! Stay hydrated and enjoy your day."
    else:
        advice = "Hot! Keep cool and avoid too much sun."

    print(advice)

#ex2
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        answer = input(item["question"] + " ").strip()
        if answer.lower() == item["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": answer,
                "correct_answer": item["answer"]
            })

    print(f"\nYou got {correct} correct and {incorrect} incorrect.")
    
    if wrong_answers:
        print("\nReview your wrong answers:")
        for wa in wrong_answers:
            print(f"Q: {wa['question']}\nYour answer: {wa['your_answer']}\nCorrect answer: {wa['correct_answer']}\n")

    if incorrect > 3:
        play_again = input("You had more than 3 wrong answers. Do you want to play again? (yes/no) ").lower()
        if play_again == "yes":
            quiz()

#ex3
def get_age(year, month, day):
    # Hard-coded current date
    current_year = 2025
    current_month = 12
    current_day = 19

    age = current_year - year
    if (month, day) > (current_month, current_day):
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    year, month, day = map(int, date_of_birth.split("/"))
    age = get_age(year, month, day)

  
    retirement_age = 65 if gender.lower() == "m" else 60
    return age >= retirement_age

def main_retirement():
    gender = input("Enter your gender (m/f): ")
    dob = input("Enter your date of birth (yyyy/mm/dd): ")

    if can_retire(gender, dob):
        print("You can retire now. Enjoy your life!")
    else:
        print("You cannot retire yet. Keep going!")

#ex4
def sum_x_forms(x):
    """Return X + XX + XXX + XXXX"""
    x_str = str(x)
    total = int(x_str) + int(x_str*2) + int(x_str*3) + int(x_str*4)
    return total
