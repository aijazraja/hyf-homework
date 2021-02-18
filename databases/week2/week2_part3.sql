/* 
Part 3: More queries
 */
 --  Get all the tasks assigned to users whose email ends in @spotify.com
 select task.id,task.title,user.name,user.email
 from task
 join  user on task.user_id= user.id
 where user.email like '%@spotify.com' ;
 

 -- Get all the tasks for 'Donald Duck' with status 'Not started'
 select task.id,task.title,user.name ,status.name AS Task_Status
 from task
 join user on task.user_id=user.id
 join status on task.status_id=status.id
 where status.name like 'Not started%' AND user.name like 'Donald Duck%';  
 -- no result.... no task assigned to Donald Duck with status not finished
 
 -- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT *
from task
join user on task.user_id=user.id
where  MONTH(task.created)=9 AND user.name like 'Maryrose Meadows%';
-- output =>Task id 2,6 => Become a billionaire, Fix the flat tire on the bike

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, 
-- how many tasks were created in november, etc. (hint: use group by)
select monthname(created) AS Month, COUNT(id)AS Task_Count
from task
group by monthname(created);
 -- output=> 18 tasks in October and 17 in September
 
 
 
 
 
 
 
 
 
 
