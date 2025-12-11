import { topLineRepository } from "../repositories/topline.repository";
import { profitRepository } from "../repositories/profit.repository";
import { depositRepository } from "../repositories/deposit.repository";

import { weeksService } from "./weeks.service";
import {
  getDayName,
  normalizeMMDDYYYY,
  normalizeValue,
} from "../utils/helper";
import { peopleRepository } from "../repositories/people.repository";
import { operationsRepository } from "../repositories/operations.repository";
import { salesPerHourRepository } from "../repositories/salesPerHour.repository";
import { foodCostRepository } from "../repositories/foodCostTracking.repository";
import { scheduledStaffRepository } from "../repositories/scheduledStaff.repository";

export const syncToplineService = {
  get: async (start: string, end: string) => {
    const topline = await topLineRepository.findByDateRange(start as string, end as string);
    const profit = await profitRepository.findByDateRange(start as string, end as string);
    const deposit = await depositRepository.findByDateRange(start as string, end as string);
    const people = await peopleRepository.findByDateRange(start as string, end as string);
    const operations = await operationsRepository.findByDateRange(start as string, end as string);
    const salesPerHour = await salesPerHourRepository.findByDateRange(start as string, end as string);
    const foodCostTracking = await foodCostRepository.findByDateRange(start as string, end as string);
    const scheduledStaff = await scheduledStaffRepository.findByDateRange(start as string, end as string);
    return {
      topline,
      profit,
      deposit,
      people,
      operations,
      salesPerHour,
      foodCostTracking,
      scheduledStaff,
    };
  },
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;      // <-- FIX
    day_name?: string; // optional
    value: number | string;
  }) => {

    const safeDate: string = normalizeMMDDYYYY(payload.date);

    const week = await weeksService.getOrCreateWeek(payload.sheet_name, payload.date);

    const week_id = week.week_id;

    // 2. Compute day_name if missing
    const day_name =
      payload.day_name?.trim() || getDayName(safeDate);

    // 3 — Normalize value based on field type
    const cleanValue = normalizeValue(payload.field, payload.value);

    // 4 — UPSERT
    return await topLineRepository.upsertByWeekAndDate(
      week_id,
      safeDate,
      day_name,
      payload.field,
      cleanValue
    );
  },
};

export const syncProfitService = {
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;
    value: number | string;
  }) => {


    const safeDate: string = normalizeMMDDYYYY(payload.date);


    // ⭐ REUSE getOrCreateWeek()
    const week = await weeksService.getOrCreateWeek(payload.sheet_name, safeDate);

    // 3 — Normalize value based on field type
    const cleanValue = normalizeValue(payload.field, payload.value);


    // 4 — UPSERT
    return await profitRepository.upsertByWeekAndDate(
      week.week_id,
      safeDate,
      payload.field,
      cleanValue
    );
  },
};

export const syncDepositService = {
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;
    value: number | string;
  }) => {

    const safeDate = normalizeMMDDYYYY(payload.date);

    const week = await weeksService.getOrCreateWeek(payload.sheet_name, safeDate);
    const cleanValue = normalizeValue(payload.field, payload.value);

    return await depositRepository.upsertByWeekAndDate(
      week.week_id,
      safeDate,
      payload.field,
      cleanValue
    );
  }
};

export const syncPeopleService = {
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;
    value: number | string;
  }) => {
    // Implementation would go here
    const safeDate = normalizeMMDDYYYY(payload.date);

    const week = await weeksService.getOrCreateWeek(payload.sheet_name, safeDate);
    const cleanValue = normalizeValue(payload.field, payload.value);

    // Assuming there's a peopleRepository similar to the others
    return await peopleRepository.upsertByWeekAndDate(
      week.week_id,
      safeDate,
      payload.field,
      cleanValue
    );
  },
};

export const syncOperationsService = {
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;
    value: number | string;
  }) => {
    // Implementation would go here
    const safeDate = normalizeMMDDYYYY(payload.date);
    const week = await weeksService.getOrCreateWeek(payload.sheet_name, safeDate);

    const rawField = payload.field;
    let field = rawField;

    // convert "guest_11_12" → "11-12"
    if (rawField.startsWith("guest_")) {
      field = rawField.replace("guest_", "");
    }

    const cleanValue = normalizeValue(field, payload.value);

    const isGuestHour = /^\d{1,2}_\d{1,2}$/.test(field);

    if (isGuestHour) {
      return await operationsRepository.upsertGuestCount(
        week.week_id,
        safeDate,
        field,
        cleanValue
      );
    }

    // Assuming there's an operationsRepository similar to the others
    return await operationsRepository.upsertByWeekAndDate(
      week.week_id,
      safeDate,
      field,
      cleanValue
    );
  },
};

export const syncSalesPerHourService = {
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;
    value: number | string;
  }) => {
    // Implementation would go here 
    const safeDate = normalizeMMDDYYYY(payload.date);

    const week = await weeksService.getOrCreateWeek(payload.sheet_name, safeDate);
    const hour = payload.field;     // "11-12"
    const amount = normalizeValue("amount", payload.value);
    return await salesPerHourRepository.upsertHour(
      week.week_id,
      safeDate,
      hour,
      amount
    );
  },
};

export const syncFoodCostTrackingService = {
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;
    value: number | string;
  }) => {
    const safeDate = normalizeMMDDYYYY(payload.date);
    const week = await weeksService.getOrCreateWeek(payload.sheet_name, safeDate);

    // / Extract vendor name ("Mutual_Trading")
    const vendor = payload.field.replace(/^vendor_/, "").trim();

    const cleanAmount = normalizeValue("amount", payload.value);

    return await foodCostRepository.upsert(
      week.week_id,
      safeDate,
      vendor,
      cleanAmount
    );
  }
};

export const syncScheduleService = {
  upsert: async (payload: {
    sheet_name: string;
    date: string;
    field: string;
    value: number | string;
  }) => {
    // Implementation would go here
    const safeDate = normalizeMMDDYYYY(payload.date);

    const week = await weeksService.getOrCreateWeek(payload.sheet_name, safeDate);

    // Split only by LAST underscore
    const lastUnderscore = payload.field.lastIndexOf("_");
    const role = payload.field.substring(0, lastUnderscore);    // left side (original string)
    const shift = payload.field.substring(lastUnderscore + 1) as "AM" | "PM"; // right side

    const cleanCount = normalizeValue("count", payload.value);

    // Assuming there's a scheduleRepository similar to the others
    return await scheduledStaffRepository.upsert(
      week.week_id,
      safeDate,
      role ?? '',
      shift,
      cleanCount
    );
  },
};  