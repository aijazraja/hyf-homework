/*
Part 2: School database
*/

--  Create a new database containing the following tables:
create database school ;

--  Class: with the columns: id, name, begins (date), ends (date)
create table class(
id int(10) NOT NUll auto_increment ,
name varchar(45) NOT NULL,
begin_date date,
ends_date date,
primary key(id)
);

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
create table Student(
id int(15) not null auto_increment,
name varchar(45) not null,
email varchar(25),
phone int(15),
class_id int(10)not null,
primary key(id),
foreign key (class_id) references class(id)
);
-- Create an index on the name column of the student table.
create index index_name
on Student(name);
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing,
 -- finished (hint: enumerations).
 alter table class
 add status enum('not-started','ongoing','finished');


