-- AlterTable
ALTER TABLE `TopLine` MODIFY `lunch_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `dinner_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `forecast_lunch` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `forecast_dinner` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `comp_total` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `void_total` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `guest_count` INTEGER NULL DEFAULT 0;
