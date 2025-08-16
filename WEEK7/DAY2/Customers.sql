CREATE TABLE customers(FirstName VARCHAR(50) NOT NULL,LastName VARCHAR(50) NOT NULL);

INSERT INTO customers(FirstName,LastName)
VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson');

SELECT * FROM customers;
SELECT * FROM customers where lastname = 'Smith';
SELECT * FROM customers where lastname = 'Jones';
SELECT * FROM customers where firstname <> 'Scott';