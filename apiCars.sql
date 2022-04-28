create database dbApiCars;

use dbApiCars;

create table cars (
carsCode int primary key auto_increment,
carsModel varchar(30),
carsPlate varchar(7)
);

insert into cars (carsModel, carsPlate) value ('Toyota Corolla', 'EMP4929');
insert into cars (carsModel, carsPlate) value ('Honda Civic', 'ELV1590');

select * from cars


