-- CreateTable
CREATE TABLE `Restaurants` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Weeks` (
    `week_id` VARCHAR(191) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `sheet_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`week_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TopLine` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `day_name` VARCHAR(191) NOT NULL,
    `mod_name` VARCHAR(191) NULL,
    `total_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `lunch_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `dinner_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `total_forecast` DECIMAL(10, 2) NULL DEFAULT 0,
    `forecast_lunch` DECIMAL(10, 2) NULL DEFAULT 0,
    `forecast_dinner` DECIMAL(10, 2) NULL DEFAULT 0,
    `comp_total` DECIMAL(10, 2) NULL DEFAULT 0,
    `void_total` DECIMAL(10, 2) NULL DEFAULT 0,
    `guest_count` INTEGER NULL DEFAULT 0,
    `training_hours` VARCHAR(191) NULL,

    INDEX `TopLine_week_id_idx`(`week_id`),
    UNIQUE INDEX `TopLine_week_id_date_key`(`week_id`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profit` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `main_room_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `patio_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `third_party_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `third_party_fees` DECIMAL(10, 2) NULL DEFAULT 0,
    `togo_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `catering` DECIMAL(10, 2) NULL DEFAULT 0,
    `alcohol_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `na_bev_sales` DECIMAL(10, 2) NULL DEFAULT 0,
    `foh_reg_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    `foh_reg_wages` DECIMAL(10, 2) NULL DEFAULT 0,
    `foh_ot_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    `foh_ot_wages` DECIMAL(10, 2) NULL DEFAULT 0,
    `boh_reg_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    `boh_reg_wages` DECIMAL(10, 2) NULL DEFAULT 0,
    `boh_ot_hours` DECIMAL(10, 2) NULL DEFAULT 0,
    `boh_ot_wages` DECIMAL(10, 2) NULL DEFAULT 0,
    `comments` LONGTEXT NULL,

    INDEX `Profit_week_id_idx`(`week_id`),
    UNIQUE INDEX `Profit_week_id_date_key`(`week_id`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deposit` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `actual` DECIMAL(10, 2) NULL DEFAULT 0,
    `amount_due` DECIMAL(10, 2) NULL DEFAULT 0,

    INDEX `Deposit_week_id_idx`(`week_id`),
    UNIQUE INDEX `Deposit_week_id_date_key`(`week_id`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `People` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `total_staff_scheduled` INTEGER NULL DEFAULT 0,
    `shoutouts` LONGTEXT NULL,
    `staffing_issues` LONGTEXT NULL,

    INDEX `People_week_id_idx`(`week_id`),
    UNIQUE INDEX `People_week_id_date_key`(`week_id`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Operations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `was_there_wait` BOOLEAN NULL DEFAULT false,
    `wait_start` VARCHAR(191) NULL,
    `wait_end` VARCHAR(191) NULL,
    `avg_wait_time` VARCHAR(191) NULL,
    `total_guest_count` INTEGER NULL DEFAULT 0,
    `comments` LONGTEXT NULL,

    INDEX `Operations_week_id_idx`(`week_id`),
    UNIQUE INDEX `Operations_week_id_date_key`(`week_id`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GuestCountPerHour` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `hour` VARCHAR(191) NOT NULL,
    `count` INTEGER NULL DEFAULT 0,

    INDEX `GuestCountPerHour_week_id_idx`(`week_id`),
    UNIQUE INDEX `GuestCountPerHour_week_id_date_hour_key`(`week_id`, `date`, `hour`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesPerHour` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `hour` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NULL,

    INDEX `SalesPerHour_week_id_idx`(`week_id`),
    UNIQUE INDEX `SalesPerHour_week_id_date_hour_key`(`week_id`, `date`, `hour`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ScheduledStaff` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `shift` ENUM('AM', 'PM') NOT NULL,
    `count` INTEGER NULL DEFAULT 0,

    INDEX `ScheduledStaff_week_id_idx`(`week_id`),
    UNIQUE INDEX `ScheduledStaff_week_id_date_role_shift_key`(`week_id`, `date`, `role`, `shift`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodCostTracking` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `week_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `vendor` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NULL DEFAULT 0,

    INDEX `FoodCostTracking_week_id_idx`(`week_id`),
    UNIQUE INDEX `FoodCostTracking_week_id_date_vendor_key`(`week_id`, `date`, `vendor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
