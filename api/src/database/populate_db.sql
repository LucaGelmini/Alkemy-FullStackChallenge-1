INSERT INTO operation_types VALUES
	(1, "incomes"),
	(2, "expenses");

INSERT INTO users  VALUES
	(DEFAULT, "lucag", 1234, "Luca", "G", "lucag@luca.com", NULL, current_timestamp, DEFAULT),
	(DEFAULT, "Nacho", 1234, "Ignacio", NULL, "nacho@nacho.com", NULL, current_timestamp, DEFAULT);

INSERT INTO balances VALUES
	(DEFAULT, "restaurant", -2500, current_timestamp, DEFAULT, 2, 1),
	(DEFAULT, "transfer", 15000, current_timestamp, DEFAULT, 1, 1),
	(DEFAULT, "grocery store", 1000, current_timestamp, DEFAULT, 2, 2);