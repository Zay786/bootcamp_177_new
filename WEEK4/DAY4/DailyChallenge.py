def divide_by_zero():
    try:
        result = 5 / 0
        print("Result:", result)
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except Exception as e:
        print("An unexpected error occurred:", e)

divide_by_zero()
