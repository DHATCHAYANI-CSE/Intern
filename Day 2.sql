CREATE TABLE customer (id INT PRIMARY KEY,Name varchar(67),gender varchar(100),Mobile INT,Address varchar(50));
Insert into customer VALUES(1, 'Ryan','M',7397,'Coimbatore');
Insert into customer VALUES(2, 'Dhatch','F',7567,'Salem');
Insert into customer VALUES(3, 'Sudha','F',73971,'Karur');
Insert into customer VALUES(4, 'Keerthi','M',567881,'Dindugal');
Insert into customer VALUES(5, 'Ram','M',73329,'Trichy');
 select * from customer;
 
create Table orderId(Id Int,price Int);
Insert into orderId VALUES(1, 45);
Insert into orderId VALUES(2, 90);
Insert into orderId VALUES(3, 9712);
Insert into orderId VALUES(10,4567);
Insert into orderId VALUES(11, 37);
select * from orderId;

select customer.id,customer.Name,orderId.Id from customer join orderId on customer.id=orderId.Id;

select customer.id,customer.Name,customer.gender,orderId.Id from customer left join orderId on customer.id=orderId.Id;

select orderId.Id,customer.id,customer.Name from orderId left join  customer  on customer.id=orderId.Id;

delete from customer where Name = 'Ryan';
select * from customer;