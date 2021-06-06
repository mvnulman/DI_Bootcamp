# Exercise 1 : Bootcamp 
Instructions 
For this exercise, you will have to find some requests on your own!

---
## Create
1. Create a database called bootcamp.
```sql
Right click on the "Databases" server, them, create new database "bootcamp"
```
2. Create a table called students.

3. Add the following columns:
- id
- last_name
- first_name
- birth_date.
- The id must be auto_incremented.
Make sure to choose the correct data type for each column.
To help, here is the data that you will have to insert. (How do we insert a date to a table?)

```sql
CREATE TABLE students 
(students_id serial PRIMARY KEY, first_name VARCHAR(150) NOT NULL, last_name VARCHAR(150) NOT NULL, birth_date date not null)
```

Here is the data:
---
```sql
first_name: Marc |  last_name: Benichou | birth_date: 02/11/1998
first_name: Yoan |  last_name: Cohen | birth_date: 03/12/2010
first_name: Lea |  last_name: Benichou | birth_date: 27/07/1987
first_name: Amelia |  last_name: Dux| birth_date: 07/04/1996
first_name: David |  last_name: Grez | birth_date: 14/06/2003
first_name: Omer |  last_name: Simpson | birth_date: 03/10/1980
```


---
## Insert

1 - Insert the data seen above to the students table. Find the most efficient way to insert the data.
```sql
INSERT INTO students 
(first_name, last_name, birth_date) 
values 
('Marc', 'Benichou', '1998-11-02'), 
('Yoan', 'Cohen', '2010-12-03'), 
('Lea', 'Benichou', '1987-07-27'), 
('Amelia', 'Dux', '1996-04-07'), 
('David', 'Grez', '2003-06-14'), 
('Omer', 'Simpson', '1980-10-03');
```

2 - Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).

```sql
INSERT INTO students 
(first_name, last_name, birth_date) 
values 
('Marcos', 'Nulman', '1990-12-07');
```
--- 

## Select

1. Fetch all of the data from the table;
```sql
SELECT * FROM students
```
2. Fetch all of the students first_names and last_names;
```sql
SELECT first_name || ' ' || last_name FROM students
```
3.  For the following questions, only fetch the first_names; and last_names of the students:

	- Fetch the student which id is equal to 2;

	- Fetch the student whose last_name is Benichou AND first_name is Marc;
	- Fetch the students whose last_names are Benichou OR first_names are Marc;
	- Fetch the students whose first_names contain the letter a;
	- Fetch the students whose first_names start with the letter a;
	- Fetch the students whose first_names end with the letter a;
	- Fetch the students whose second to last letter of their first_names are a (Example: Leah);
	- Fetch the students whose id’s are equal to 1 AND 3 .


4. Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).

```sql
SELECT first_name || ' ' || last_name FROM students where students_id = 2;

SELECT * FROM students where last_name = 'Benichou' AND first_name = 'Marc';

SELECT * FROM students where last_name = 'Benichou' OR first_name = 'Marc';

SELECT * FROM students where first_name LIKE '%a%';

SELECT * FROM students where first_name LIKE '%a';

SELECT * FROM students where first_name LIKE '%a_';

SELECT * FROM students where students_id = 1 OR students_id = 3;

SELECT * FROM students where birth_date between '2000-01-01' AND current_date;
```