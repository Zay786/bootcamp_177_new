MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a 
#t%
'''

matrix = []

for line in MATRIX_STR.strip().split("\n"):
    matrix.append(list(line))
    rows = len(matrix)
    cols = len(matrix[0])
    raw_message = ""

for col in range(cols):
    for row in range(rows):
        char = matrix[row][col]
        raw_message += char    

decoded_message = ""
previous_is_alpha = False

for char in raw_message:
    if char.isalpha():
        decoded_message += char
        previous_is_alpha = True
    else:
        if previous_is_alpha:
            decoded_message += " "
            previous_is_alpha = False 

decoded_message = " ".join(decoded_message.split())
print(decoded_message)           