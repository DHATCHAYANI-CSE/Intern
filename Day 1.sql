CREATE TABLE customer (id INT PRIMARY KEY,Name varchar(90),gender varchar(100),Mobile INT,Address varchar(50));
Insert into customer VALUES(1, 'Ryan','M',739,'Coimbatore');
Insert into customer VALUES(2, 'Dhatch','F',7226,'Salem');
Insert into customer VALUES(3, 'Sudha','F',76605,'Karur');
Insert into customer VALUES(4, 'Keerthi','M',1231,'Dindugal');
Insert into customer VALUES(5, 'Ram','M',76329,'Trichy');
Insert into customer VALUES(6, 'Raja','M',98100,'Ooty');
Insert into customer VALUES(7, 'Keerthika','F',532,'Rameshwaram');
Insert into customer VALUES(8, 'Mano','F',644,'Salem');
Insert into customer VALUES(9, 'Surya','M',988,'Karur');
Insert into customer VALUES(10,'Udaya','F',9577,'Madurai');


CREATE TABLE admin (id INT PRIMARY KEY,Name varchar(100),gender varchar(200),Mobile INTEGER,Address varchar(50));
Insert into admin VALUES(1, 'Arun','M',994,'Erode');

alter table customer add state varchar(50);
update customer set state='TamilNadu' where id =1;
select * from customer;
select * from customer where name in('Ryan','Dhatch');
delete  from customer where id=9;
select * from customer;
select * from customer where id between 6 and 10;
select distinct name from customer;
select count(distinct id) from customer;

select * from customer order by name desc;
select * from customer order by id asc;

select count(distinct state) from customer;