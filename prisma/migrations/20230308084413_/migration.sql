/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleId]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `googleId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_password_key` ON `user`(`password`);

-- CreateIndex
CREATE UNIQUE INDEX `User_googleId_key` ON `user`(`googleId`);
