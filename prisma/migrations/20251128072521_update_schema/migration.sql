-- AlterTable
ALTER TABLE `Deposit` MODIFY `actual` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `amount_due` DECIMAL(10, 2) NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Profit` MODIFY `date` VARCHAR(191) NOT NULL,
    MODIFY `main_room_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `patio_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `third_party_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `togo_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `catering` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `alcohol_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `na_bev_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `foh_reg_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `foh_reg_wages` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `foh_ot_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `foh_ot_wages` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `boh_reg_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `boh_reg_wages` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `boh_ot_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    MODIFY `boh_ot_wages` DECIMAL(10, 2) NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `TopLine` ADD COLUMN `total_forecast` DECIMAL(10, 2) NULL DEFAULT 0,
    ADD COLUMN `total_sales` DECIMAL(10, 2) NULL DEFAULT 0;
