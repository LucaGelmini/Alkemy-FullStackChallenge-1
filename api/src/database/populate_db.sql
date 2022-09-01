INSERT INTO operation_types VALUES
	(1, "incomes"),
	(2, "expenses");

INSERT INTO users  VALUES
	(DEFAULT, "lucag", 1234, "Luca", "G", "lucag@luca.com", NULL, current_timestamp, DEFAULT),
	(DEFAULT, "nacho", 1234, "Ignacio", NULL, "nacho@nacho.com", NULL, current_timestamp, DEFAULT);
	
INSERT INTO balances VALUES
	(DEFAULT, "restaurant", 2500, "2022-10-07T13:23:44Z-03:00",current_timestamp, DEFAULT, 2, 1),
	(DEFAULT, "transfer", 15000, NULL, current_timestamp, DEFAULT, 1, 1),
	(DEFAULT, "grocery store", 1000, "2022-04-08T11:15:00Z-03:00",current_timestamp, DEFAULT, 2, 2);
	

SELECT * FROM balances b 
