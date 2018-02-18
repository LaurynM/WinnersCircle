### Schema
CREATE DATABASE horsesDB;
USE horsesDB;

CREATE TABLE horses
(
	id int NOT NULL AUTO_INCREMENT,
	horseName varchar(255) NOT NULL,
	racing BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);