/*
  Warnings:

  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `comment`;

-- CreateTable
CREATE TABLE `TravelHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `travelDate` DATETIME(3) NOT NULL,
    `startStation` VARCHAR(191) NOT NULL,
    `endStation` VARCHAR(191) NOT NULL,
    `travelTime` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
