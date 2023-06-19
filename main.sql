CREATE TABLE student (Id INTEGER PRIMARY KEY,Name varchar,Age Integer,Major varchar,Subject varchar(50),Marks Integer);
Insert into student VALUES(1, 'Ryan',15,'Biology','Physics',78);
Insert into student VALUES(2, 'Dhatch',16,'CS','C',98);
Insert into student VALUES(3, 'Sudha',17,'CSE','DBMS',99);
Insert into student VALUES(4, 'Keerthi',16,'Biology','Chemistry',80);
Insert into student VALUES(5, 'Ram',15,'IT','DS',78);
Insert into student VALUES(6, 'Raja',16,'Biology','Botany',99);
Insert into student VALUES(7, 'Keerthika',14,'CS','C++',100);
Insert into student VALUES(8, 'Mano',14,'Biology','Zoology',99);
Insert into student VALUES(9, 'Surya',13,'CS','Java',89);
Insert into student VALUES(10,'Udaya',16,'Biology','Chemistry',67);

Select * from student;
select count (Id) from student;
select avg(Marks) from student;
select sum(Marks) from student;

CREATE TABLE studentcourse(Course Id INTEGER,Name varchar);
Insert into studentcourse values(1,'Ryan');
Insert into studentcourse values(2,'Dhatch');
Insert into studentcourse values(3,'Sudha');
Insert into studentcourse values(1,'Keerthi');
Insert into studentcourse values(4,'Ram');
Insert into studentcourse values(1,'Raja');
Insert into studentcourse values(2,'Keerthika');
Insert into studentcourse values(1,'Mano');
Insert into studentcourse values(2,'Surya');
Insert into studentcourse values(1,'Udaya');

--Inner join
select studentcourse.Course Id,student.Name,student.Major from student INNER JOIN studentcourse on student.Name=studentcourse.Name;
--Left join
select student.Id,student.Name,studentcourse.Course Id FROM student LEFT JOIN studentcourse on student.Name = studentcourse.Name;
--Right JOIN
select studentcourse.Course Id,studentcourse.Name from studentcourse LEFT JOIN student on student.Name=studentcourse.Name;
--Outer JOIN
select student.Name,studentcourse.Course Id FROM student LEFT JOIN studentcourse on student.Name = studentcourse.Name UNION select studentcourse.Course Id,studentcourse.Name from studentcourse LEFT JOIN student on student.Name=studentcourse.Name; 
