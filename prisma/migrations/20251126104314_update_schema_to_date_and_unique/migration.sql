/*
  Warnings:

  - A unique constraint covering the columns `[week_id,date]` on the table `Deposit` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[week_id,date]` on the table `Profit` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Deposit` MODIFY `date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `Profit` MODIFY `date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `Weeks` MODIFY `start_date` DATE NOT NULL,
    MODIFY `end_date` DATE NOT NULL;

-- CreateIndex
CREATE INDEX `Deposit_week_id_idx` ON `Deposit`(`week_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Deposit_week_id_date_key` ON `Deposit`(`week_id`, `date`);

-- CreateIndex
CREATE INDEX `Profit_week_id_idx` ON `Profit`(`week_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Profit_week_id_date_key` ON `Profit`(`week_id`, `date`);

-- CreateIndex
CREATE INDEX `TopLine_week_id_idx` ON `TopLine`(`week_id`);
