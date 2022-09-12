INSERT INTO users  VALUES
	(DEFAULT,
	"TestUser",
	"$2b$10$4RYIjfyXDu2xmC6qKLhsCO1/lEgMzM1k9Gr8cFmijjYApCoD3NzBu", /*testUser123*/
	"User",
	"Test",
	"user@test.com",
	NULL,
	current_timestamp,
	DEFAULT),
;
	
INSERT INTO balances VALUES
	(DEFAULT, "restaurant", 2500, "2022-10-07T13:23:44Z-03:00",current_timestamp, DEFAULT, 2, 1),
	(DEFAULT, "transfer", 15000, NULL, current_timestamp, DEFAULT, 1, 1),
	(DEFAULT, "grocery store", 1000, "2022-04-08T11:15:00Z-03:00",current_timestamp, DEFAULT, 2, 2);
	
SELECT * FROM users u ;