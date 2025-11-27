/*
  Warnings:

  - You are about to drop the column `labor_percent` on the `TopLine` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[week_id,date]` on the table `TopLine` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `TopLine` DROP COLUMN `labor_percent`;

-- CreateIndex
CREATE UNIQUE INDEX `TopLine_week_id_date_key` ON `TopLine`(`week_id`, `date`);
