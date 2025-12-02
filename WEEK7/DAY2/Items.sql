CREATE TABLE items(
ID SERIAL PRIMARY KEY,
ITEM VARCHAR (50) NOT NULL,
PRICE NUMERIC NOT NULL
);
SELECT * FROM items;

INSERT INTO items (ITEM,PRICE) 
VALUES ('SmallDesk',100),('LargeDesk',300),('Fan',80);

SELECT * FROM items;
SELECT * FROM items where price > 80;
SELECT * FROM items where price <= 300;