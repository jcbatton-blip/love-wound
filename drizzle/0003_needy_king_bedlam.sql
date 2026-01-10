CREATE TABLE `testimonials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`initial` varchar(10) NOT NULL,
	`date` varchar(100) NOT NULL,
	`title` varchar(500) NOT NULL,
	`text` text NOT NULL,
	`featured` int NOT NULL DEFAULT 0,
	`displayOrder` int NOT NULL DEFAULT 0,
	`category` varchar(50),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
