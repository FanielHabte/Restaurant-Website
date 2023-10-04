create database reservation_app;
use reservations_app;
CREATE TABLE reservation (
    reservation_id integer primary key auto_increment,
    customer_name varchar(225) not null,
    guest_number integer not null,
    reserv_time integer not null,
    First_Name varchar(225) not null,
    Last_Name varchar(225) not null,
    Email varchar(225) not null,
    Phone_Number integer not null
);

INSERT INTO notes (title, contents)
VALUES
('First Note', 'A note about something'),
('Second Note', 'Another note about something');

