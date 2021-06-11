# Exercise 1 : Items And Customers

## Instructions
- We will work on the public database that we created yesterday.

- Use SQL to get the following from the database:
1. All items, ordered by price (lowest to highest).
Items with a price above 80 (80 included), ordered by price (highest to lowest).
---
```sql
SELECT * FROM items
ORDER BY price ASC

Output: 1 Fan 80, 2 Small Desk 100,  3 Large Desk 300.
```
2. The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.


```sql
SELECT * FROM items WHERE price >= 80 
ORDER BY price DESC

Output: 1 Large Desk 300, 2 Small Desk 100, 3 Fan 80.
```


3. All last names (no other columns!), in reverse alphabetical order (Z-A)


```sql
SELECT last_name FROM customers
ORDER BY last_name DESC

Output: Scott, Jones, Jones, Johnson, Green
```

---

## 2. Create a table named purchases. 
## It should have 2 columns : customer_id and item_id. 
## These columns are references from the tables customers and items. Edit the data of the purchases table:

```sql
CREATE TABLE purchases(
	customer_id integer,
	item_id integer,
	foreign key (customer_id) REFERENCES customers(customer_id),
	foreign key (item_id) references items(items_id)
);
```

- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?

```sql
INSERT INTO purchases (customer_id) values (2);
Output: INSERT 0 1. Works but the item_id becomes null

```

- Add 5 rows which reference existing customers and items.
```sql
INSERT INTO purchases (customer_id, item_id) values (2,1),(1, 1),(2, 2),(1, 2),(2, 2);
```
--- 

## 3. Use SQL to get the following from the database: 
- All purchases. Is this information useful to us?
```sql
SELECT * FROM purchases
Output: Not much...
```
- All purchases, joining with the customers table.
```sql
SELECT * FROM purchases INNER JOIN customers ON (purchases.customer_id = customers.customer_id);
```
- Purchases of the customer with the ID equal to 4.
```sql

```
- Purchases for a large desk AND a small desk
```sql
select * from purchases INNER JOIN 
items ON (purchases.item_id = items.items_id) where purchases.item_id = 1 or purchases.item_id = 2
```
---

## 4. Create a purchase for Scott Scott – he bought a hard drive.
```sql
INSERT INTO items (name, price) values ('hard drive', 480)

INSERT INTO purchases (customer_id, item_id) values (3, 4)

SELECT * FROM purchases inner join items on (purchases.item_id = items.items_id)
```
---

## 5. Use SQL to show all the customers who have made a purchase. Show the following fields/columns:

- Customer first name
```sql
SELECT first_name FROM purchases INNER JOIN customers ON (purchases.customer_id = customers.customer_id)
```

- Customer last name
```sql
SELECT last_name FROM purchases INNER JOIN customers ON (purchases.customer_id = customers.customer_id)
```
- Item name
```sql
SELECT NAME FROM items INNER JOIN purchases ON (items.items_id = purchases.item_id)
```
---

# Exercise 2 : Dvdrental Database
1. In the dvdrental database write a query to select all the columns from the “customer” table.
```sql
SELECT * FROM customer
```

2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
```sql
SELECT first_name ||' '|| last_name as full_name from customer
```

3. Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
```sql
SELECT DISTINCT
		create_date
FROM customer
```

4. Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
```sql
   SELECT * FROM customer
ORDER BY
    first_name DESC
```

5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
```sql
SELECT film_id, title, description, release_year, rental_rate from film
ORDER BY
rental_rate;
```

6. Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
```sql
SELECT address, district, phone FROM address
WHERE district='Texas'
```

7. Write a query to retrieve all movie details where the movie id is either 15 or 150.
```sql
SELECT * FROM film WHERE film_id = 15 or film_id = 150
```

8. Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
```sql
select * from film
where title='Ocean Eleven';
```

9. No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
```sql
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title LIKE 'Oc%';
```

10. Write a query which will find the 10 cheapest movies
```sql
SELECT * FROM film
ORDER BY replacement_cost ASC
FETCH FIRST 10 ROW ONLY
```

11. Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
Bonus: Try to not use LIMIT.
```sql
select * from film
order by 
rental_rate
 limit 10 offset 10;
```

12. Write a query which will join the data in the customer table and the payment table. You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
```sql
SELECT
    customer.customer_id, amount, payment_date
FROM
    customer
INNER JOIN payment
    ON customer.customer_id = payment.customer_id
```

13. You need to check your inventory. Write a query to get all the movies which are not in inventory.
```sql

```

14. Write a query to find which city is in which country.
```sql
SELECT 
    country,city
FROM
    city
INNER JOIN country
    ON country.country_id = city.country_id
```