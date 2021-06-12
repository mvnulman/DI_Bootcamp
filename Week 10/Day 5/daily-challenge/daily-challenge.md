# Instructions

1. Create a table called orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.
```sql
create table items (
item_id serial PRIMARY KEY,
name VARCHAR ( 255 ) UNIQUE NOT NULL,
price integer NOT NULL
);

create table orders (
	item_id serial,
	amount integer NOT NULL,
    customer_id integer NOT NULL,
	FOREIGN KEY (item_id)
	REFERENCES items (item_id)
);
```

2. There should be a one to many relationship between the orders table and the items table. An order can have many items, but an item can belong to only one order.
```sql
insert into items (name,price) values ('kindle',300),('bike',500),('light',13),('car',2500),('ballon',16);
insert into orders (item_id,amount,customer_id) values (1,16,1),(2,12,1),(3,2,1),(4,60,1),(5,3,2),(2,2,2),(3,7,3),(4,4,3),(5,2,3);

```
3. Display all the items.
```sql
SELECT * FROM items 
```
4. Display all the orders.
```sql
SELECT * FROM orders
```
5. Use Inner Join to display the orders with their items.
```sql
SELECT sum(price) total FROM orders INNER JOIN items ON orders.item_id = items.item_id WHERE order_id = 1
```