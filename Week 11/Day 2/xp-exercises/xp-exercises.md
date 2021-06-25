# Exercise 1: DVD Rental
## Instructions

1. Get a list of all film languages.
```sql
SELECT language_id, name FROM language
```

2. Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:

Get all films, even if they don’t have languages.
```sql
SELECT * FROM film
JOIN language ON film.language_id = language.language_id
WHERE language IS NULL;
```
Get all languages, even if there are no films in those languages.
```sql
SELECT language FROM film
JOIN language ON film.language_id = language.language_id
WHERE film is NULL
```


3. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
```sql
CREATE TABLE new_film (
	id serial PRIMARY KEY,
	name varchar(100) not null
);

INSERT INTO new_film (id, name)
VALUES ('1', 'Kill Bill'), ('2', 'Kill Bill 2'), ('3', 'Godzilla Vs King Kong'), ('4', 'Tom & Jerry');
```
4. Create a new table called customer_review, which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
It should have the following columns:
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.

```sql
CREATE TABLE customer_review (
	review_id serial PRIMARY KEY,
    film_id INT FOREIGN KEY REFERENCES new_film(ID),
    language_id INT FOREIGN KEY REFERENCES language(ID),
    title varchar(100) not null,
    score numeric not null,
    review_text varchar(255) not null,
    last_update DATE not null
);

```

5. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

```sql

```
6. Delete a film that has a review from the new_film table, what happens to the customer_review table?

```sql
We need to delete all the links between the table before drop the whole table.
```
---
# Exercise 2: DVD Rental
## Instructions

1. Use UPDATE to change the language of some films. Make sure that you use valid languages.

```sql

```

2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

```sql
film_id and language_id.
Needs to verify the correct parameters to be able to add new informations to the table.
```

3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

```sql
No. It was needed to drop all the constrains first to do the DROP TABLE.
```

4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

```sql
SELECT rental_date, return_date FROM rental
WHERE return_date < rental_date
```

5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

```sql

```