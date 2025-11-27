-- CreateTable
CREATE TABLE `Weeks` (
    `week_id` VARCHAR(191) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `sheet_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`week_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TopLine` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `day_name` VARCHAR(191) NOT NULL,
    `mod_name` VARCHAR(191) NULL,
    `lunch_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `dinner_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `forecast_lunch` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `forecast_dinner` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `comp_total` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `void_total` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `labor_percent` DECIMAL(5, 2) NOT NULL DEFAULT 0,
    `guest_count` INTEGER NOT NULL DEFAULT 0,
    `training_hours` DECIMAL(5, 2) NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profit` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `main_room_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `patio_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `third_party_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `togo_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `catering` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `alcohol_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `na_bev_sales` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `foh_reg_hours` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `foh_reg_wages` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `foh_ot_hours` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `foh_ot_wages` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `boh_reg_hours` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `boh_reg_wages` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `boh_ot_hours` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `boh_ot_wages` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `comments` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deposit` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `actual` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `amount_due` DECIMAL(10, 2) NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
