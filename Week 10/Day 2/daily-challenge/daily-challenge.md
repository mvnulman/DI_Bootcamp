# Instructions

In this exercise we will be using the actors table from todays lesson.
1. Count how many actors are in the table.
```sql
SELECT * FROM actor
Output: 200.
```
2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

```sql
insert into actor (first_name, last_name, last_update) values ('Brad', '', current_date)

Output: INSERT 0 1
Query returned successfully in 35 msec.

201	"Brad"		"2021-06-07 00:00:00"
```
---
