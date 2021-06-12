# Basic Select Statement

1. Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.
---
```sql
SELECT first_name "First Name", last_name "Last Name" 
FROM employees
```
2. Write a query to get unique departments ID from the employee table (ie. without duplicates).
```sql
SELECT DISTINCT department_id FROM employees
```
3. Write a query to get the details of all employees from the employee table, do so in descending order by first name.
```sql
SELECT * FROM employees ORDER BY first_name DESC
```
4. Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
```sql
SELECT first_name, last_name, salary, (15 * salary / 100) 
AS pf FROM employees
```
5. Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
```sql
SELECT employee_id e_id, first_name || ' ' || last_name AS NAMES,
salary FROM employees ORDER BY salary
```
6. Write a query to get the total sum of all salaries paid to the employees.
```sql
SELECT SUM (salary) AS total_salaries 
FROM employees
```
7. Write a query to get the maximum and minimum salaries paid to the employees.
```sql
SELECT MIN(salary) min_salary, MAX(salary) max_salary FROM employees
```
8. Write a query to get the average salary paid to the employees.
```sql
SELECT AVG(salary) FROM employees
```
9. Write a query to get the number of employees working in the company.
```sql
SELECT COUNT(*) FROM employees
```
10. Write a query to get all the first names from the employees table in upper case.
```sql
SELECT UPPER (first_name) FROM employees
```
11. Write a query to get the first three characters of each first name of all the employees in the employees table.
```sql
SELECT LEFT(first_name, 3) FROM employees
```
12. Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
```sql
SELECT first_name || ' ' || last_name AS "full NAME" FROM employees
```
13. Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
```sql
SELECT first_name, last_name, LENGTH(first_name || ' ' || last_name) 
AS "full NAME" FROM employees
```
14. Write a query to check whether the first_name column of the employees table contains any numbers.
```sql
SELECT regexp_matches(first_name, '\d+') FROM employees
```
15. Write a query to select the first ten records from a table.
```sql
SELECT * FROM employees LIMIT 10
```
---
# Basic Select Statement

1. Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
```sql
SELECT first_name, last_name, salary 
FROM employees WHERE salary BETWEEN 10000 AND 15000
```
2. Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
```sql
SELECT first_name, last_name, hire_date 
FROM employees WHERE date_part('year', hire_date) = '1987'
```
3. Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
```sql
SELECT first_name || ' ' || last_name AS full_name 
FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%'

```
4. Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
```sql
SELECT last_name, job_title, salary FROM employees emp 
INNER JOIN jobs ON emp.job_id = jobs.job_id WHERE job_title != 'Programmer' 
AND job_title != 'Shipping Clerk' AND salary != 4500 AND salary != 10000 AND salary != 15000
```
5. Write a query to display the last names of all employees whose last name contains exactly six characters.
```sql
SELECT last_name FROM employees 
WHERE LENGTH (last_name) = 6
```
6. Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
```sql
SELECT last_name FROM employees 
WHERE last_name LIKE '__e%'
```
7. Write a query to display the jobs/designations available in the employees table.
```sql
SELECT DISTINCT job_title 
FROM employees emp INNER JOIN jobs ON emp.job_id = jobs.job_id
```
8. Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
```sql
SELECT * FROM employees WHERE last_name LIKE 'Jones' OR last_name LIKE 'Blake' 
OR last_name LIKE 'Scott' OR last_name LIKE 'King' OR last_name LIKE 'Ford'
```