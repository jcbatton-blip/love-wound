CREATE TABLE `applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`email` varchar(320),
	`phone` varchar(50),
	`whyNow` text NOT NULL,
	`whatTried` text NOT NULL,
	`readyForCommitment` text NOT NULL,
	`status` enum('pending','reviewed','scheduled','accepted','declined') NOT NULL DEFAULT 'pending',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `applications_id` PRIMARY KEY(`id`)
);
