DROP TABLE if exists join_table CASCADE;
DROP TABLE if exists users CASCADE;
DROP TABLE if exists events CASCADE;
DROP TABLE if exists temperatures CASCADE;


CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  name varchar(25),
  email varchar(100),
  password varchar(500),
  zipcode integer
);

CREATE TABLE events
(
  event_id SERIAL PRIMARY KEY,
  name varchar(155),
  details varchar(600)
);


CREATE TABLE join_table
(
user_id integer references users,
event_id integer references events,
PRIMARY KEY (user_id, event_id)
);

CREATE TABLE temperatures
(
id SERIAL PRIMARY KEY,
state varchar(100),
mean_temp integer,
year integer
);
