-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task(title, description, created, updated, due_date, status_id, user_id)
values('meeeting','meeting with comapany owner','2021-01-15 06:54:16','2021-01-19 06:54:16','2021-02-18 06:54:16',2,3);

-- change the title of a task
UPDATE task 
set title= 'databse class'
where id=1;

-- Change a task due date
update task
set due_date='2021-03-28 06:54:16'
where id=1;

--  Change a task status
update task 
set status_id=1
where id =1;

-- Mark a task as complete
update task 
set status_id=3  -- 3=done in status table
where id =1;

-- Delete a task
delete from task
where id=2;



