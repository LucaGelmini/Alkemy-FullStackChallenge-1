DROP DATABASE IF EXISTS balance_personal_alkemy;
CREATE DATABASE balance_personal_alkemy;
USE balance_personal_alkemy;

DROP TABLE IF EXISTS operation_types;
CREATE TABLE operation_types(
	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`type` varchar(50) NOT NULL,
	primary key (id)
)DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS balances;
CREATE TABLE balances(
	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	concept varchar(50) NOT NULL,
	amount int NOT NULL,
	`create_date` timestamp null default null,
	`update_date` timestamp null default null,
	type_id int(10) UNSIGNED NOT NULL,
	primary key (id),
	KEY type_foreign (type_id),
	CONSTRAINT type_foreign
	FOREIGN KEY (type_id)
	REFERENCES operation_types(id)
)DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS users;
CREATE  TABLE users (
	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	`password` varchar(50) NOT NULL, 
	name varchar(50) NOT NULL,
	family_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	avatar_path varchar(50),
	`create_date` timestamp null default null,
	`update_date` timestamp null default null,
	balance_id int(10) unsigned not NULL,
	primary key (id),
	KEY balance_foreign (balance_id),
	CONSTRAINT balance_foreign
	FOREIGN KEY (balance_id)
	REFERENCES balances(id)
)DEFAULT CHARSET=utf8;

INSERT INTO operation_types VALUES
	(1, "incomes"),
	(2, "expenses");


