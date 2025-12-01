import { topLineRepository } from "../repositories/topline.repository";
import { profitRepository } from "../repositories/profit.repository";
import { depositRepository } from "../repositories/deposit.repository";

import { weeksService } from "./weeks.service";
import {
  getDayName,
  normalizeMMDDYYYY,
  normalizeValue,
} from "../utils/helper";

export const syncToplineService = {
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
