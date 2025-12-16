CREATE TABLE `tenantResponses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`propertyAddress` varchar(255) NOT NULL,
	`tenantName` varchar(255) NOT NULL,
	`tenantEmail` varchar(320) NOT NULL,
	`tenantPhone` varchar(50),
	`photoDate1` varchar(100),
	`photoDate2` varchar(100),
	`photoDate3` varchar(100),
	`showingPreferences` text,
	`blackoutDates` text,
	`advanceNoticeHours` int DEFAULT 24,
	`questions` text,
	`status` enum('pending','reviewed','scheduled') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `tenantResponses_id` PRIMARY KEY(`id`)
);
