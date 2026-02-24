import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'zaynah'
PASSWORD = '1234'
DATABASE = 'hellokitty'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
cursor = connection.cursor()
query = "SELECT * FROM logistics_users;"
cursor.execute(query)
results = cursor.fetchall()
connection.close()

class Employees():
    def getAll():
        return results
    
user = Employees.getAll()
for item in user:
    print(item)