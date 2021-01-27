
-- Find out how many tasks are in the task table 

SELECT count(id) 
AS total_tasks
FROM TASK;

--  Find out how many tasks in the task table do not have a valid due date;

SELECT count(id) 
AS Invalid_Dates_Count
FROM TASK
where due_date IS null ;   -- output 8

--  Find all the tasks that are marked as done

SELECT task.title,status.name
FROM task
INNER JOIN status ON task.status_id = status.id
WHERE status.name= 'Done';

-- Find all the tasks that are not marked as done

SELECT task.title, status.name
FROM task, status
INNER JOIN status ON task.status_id = status.id
WHERE status.name= 'Not started' OR status.name= 'In progress' ;

-- Get all the tasks, sorted with the most recently created first

SELECT *
FROM task
order by created DESC;

-- Get the single most recently created task

select *
from task
order by created desc
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database

select title ,due_date
from task
where description like '%database%'  or  title like '%database%' ;

-- Get the title and status (as text) of all tasks

SELECT task.title AS text, status.name AS text
from task
inner join status on task.status_id=status.id;

-- Get the name of each status, along with a count of how many tasks have that status

select status.name ,count(task.status_id) as counter
from status
join task on status.id=task.status_id
group by status.name;

-- Get the names of all statuses, sorted by the status with most tasks first

select status.name ,count(task.status_id) as  counter
from status
join task on status.id=task.status_id
group by status.name
order by(counter)DESC;
