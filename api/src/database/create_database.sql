DROP DATABASE IF EXISTS alkemy_personal_balance;
CREATE DATABASE alkemy_personal_balance;
USE alkemy_personal_balance;

DROP TABLE IF EXISTS operation_types;
CREATE TABLE operation_types(
	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`type` varchar(50) NOT NULL,
	primary key (id)
)DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS users;
CREATE  TABLE users (
	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL, 
	name varchar(50) NOT NULL,
	family_name varchar(50),
	email varchar(50) NOT NULL,
	avatar_path varchar(50),
	`createdAt` timestamp null default null,
	`updatedAt` timestamp null default null,
	primary key (id)
)DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS balances;
CREATE TABLE balances(
	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	concept varchar(50) NOT NULL,
	amount int NOT NULL,
	`createdAt` timestamp null default null,
	`updatedAt` timestamp null default null,
	type_id int(10) UNSIGNED NOT NULL,
	user_id int(10) UNSIGNED NOT NULL,
	primary key (id),
	KEY type_foreign (type_id),
	KEY user_foreign (user_id),
	CONSTRAINT type_foreign FOREIGN KEY (type_id) REFERENCES operation_types(id),
	CONSTRAINT user_foreign FOREIGN KEY (user_id) REFERENCES users(id) 
)DEFAULT CHARSET=utf8;


