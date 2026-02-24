import pandas as pd

# Series: rows; 1 dimensional
# Dataframes: rows & column: 2 dimensional

series = pd.Series([1, 2, 3, 4]) # 
print(series)

df = pd.DataFrame({
    "Name" : ["Alice", "Bob", "Charlie"],
    "Age" : [25,32,22]
})

print(df)

df.to_csv("students.csv")