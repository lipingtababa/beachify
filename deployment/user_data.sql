create database beachify;

create table if not exists user_data (

user_id varchar(255) not null, 
dt varchar(255) not null,
geolocation_lat decimal(8, 6) not null,
geolocation_long decimal(9, 6) not null,
country_code varchar(255),
beach_clean_score int not null,
trash_category int,
season varchar(255),
name_of_beach varchar(255)
);

describe user_data;

LOAD DATA LOCAL INFILE '/home/ubuntu/beachify/beachify/beachify_data.csv' INTO TABLE user_data FIELDS TERMINATED BY ',' IGNORE 1 LINES;
