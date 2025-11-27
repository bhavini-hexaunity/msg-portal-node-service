import { topLineRepository } from "../repositories/topline.repository";
import { weeksRepository } from "../repositories/weeks.repository";
import {
  parseMMDDYYYY,
  getDayName,
  getWeekRange,
  generateWeekId
} from "../utils/helper";

export const syncToplineService = {
  upsert: async (payload: {
    sheet_name: string;
    field: string;
    date: string;      // <-- FIX
    day_name?: string; // optional
    value: number | string;
  }) => {

    if (!payload.date.trim()) {
      throw new Error("Missing required field: date");
    }

    const safeDate: string = payload.date;

    // 1. Get or create week
    let week = await weeksRepository.findBySheetName(payload.sheet_name);

    if (!week) {
      const { start, end } = getWeekRange(safeDate);
      const week_id = generateWeekId(start);

      week = await weeksRepository.create({
        week_id,
        start_date: start,
        end_date: end,
        sheet_name: payload.sheet_name
      });
    }

    const week_id = week.week_id;

    // 2. Compute day_name if missing
    const day_name =
      payload.day_name?.trim() || getDayName(safeDate);

    // 3. Upsert topline row
    return await topLineRepository.upsertByWeekAndDate(
      week_id,
      safeDate,
      day_name,
      payload.field,
      payload.value
    );
  },
};
