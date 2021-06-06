# Exercise 1 : Items And Customers

## Create a database called public.
Add two tables:
- items
- customers.

---
Output:
```sql
CREATE TABLE items (
	items_id serial PRIMARY KEY,
	name varchar(100) not null,
	price numeric not null
);

CREATE TABLE customers (
	customer_id serial PRIMARY KEY,
	first_name varchar(100) not null,
	las_name varchar(100) not null
);
```

---

## 2. Follow the instructions below to determine which columns to add to the two tables:

- Add the following items to the items table:
Small Desk – 100 (ie. price)
Large desk – 300
Fan – 80

- Add 5 new customers to the customers table:
Greg Jones
Sandra Jones
Scott Scott
Trevor Green
Melanie Johnson

--- 

Output:
```sql
INSERT INTO items (name, price) values ('Large Desk', 300), ('Small Desk', 100), ('Fan', 80);

INSERT INTO customers (
	first_name, last_name)
	values ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson');
```

---

## 3. Use SQL to fetch the following data from the database:
- All the items;
```sql
SELECT * FROM items
Output: Large Desk 300, Small Desk 100, Fan 80.
```
- All the items with a price above 80 (80 not included);
```sql
SELECT * FROM items where price > 80
Output: Large Desk 300, Smal Desk 100.
```
- All the items with a price below 300. (300 included);
```sql
SELECT * FROM items where price <= 300;
Output: Large Desk 300, Smal Desk 100, Fan 80.
```
- All customers whose last name is ‘Smith’ (What will be your outcome?);
```sql
SELECT * FROM customers where first_name LIKE 'Smith'

Output:
firstname = character varying(100) | last_name = character varying(100)
```
- All customers whose last name is ‘Jones’;
```sql
SELECT * FROM customers where last_name LIKE 'Jones'
Output: Greg Jones , Sandra Jones
```
- All customers whose firstname is not ‘Scott’;

```sql
SELECT * FROM customers where first_name not LIKE 'Scott'
Output: Greg Jones, Sandra Jones, Trevor Green, Melanie Johnson.
```
---
