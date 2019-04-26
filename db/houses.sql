create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip int
);

insert into houses (name, address, city, state, zip)
values ('Slytherin', '69 Stealthy Way', 'Atlanta', 'GA', 30303),
('Ravenclaw', '1337 Wisdom Street', 'Atlanta', 'GA', 30303),
('Hufflepuff', '4311 Determination Drive', 'Atlanta', 'GA', 30303),
('Gryffindor', '420 Blazing Court', 'Atlanta', 'GA', 30303);