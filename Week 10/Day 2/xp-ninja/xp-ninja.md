# Exercise 1 : Bootcamp 
Instructions
Continuation of the Exercise XPGold

---
## Select
For the following questions, you have to fetch the first_names, last_names and birth_dates of the students.

1. Fetch the first four students. You have to order the four students alphabetically by last_name.
```sql
SELECT
	first_name, last_name, birth_date
FROM students 
ORDER BY last_name
FETCH FIRST 4 ROW ONLY
```

2. Fetch the details of the youngest student.

```sql
SELECT
		first_name, last_name, birth_date
FROM students 
ORDER BY birth_date desc
FETCH FIRST ROW ONLY
```

3. Fetch three students skipping the first two students.

```sql
SELECT
	first_name, last_name, students_id
FROM students
WHERE students_id BETWEEN 3 AND 5
```