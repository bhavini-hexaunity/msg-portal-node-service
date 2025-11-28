import { weeksRepository } from "../repositories/weeks.repository";
import { generateWeekId, getWeekRange, normalizeMMDDYYYY } from "../utils/helper";

export const weeksService = {
  findAll: async () => {
    return await weeksRepository.findAll();
  },

  findById: async (week_id: string) => {
    return await weeksRepository.findById(week_id);
  },

  create: async (payload: {
    week_id: string;
    start_date: Date;
    end_date: Date;
    sheet_name: string;
  }) => {
    return await weeksRepository.create(payload);
  },

  update: async (
    week_id: string,
    data: {
      start_date?: Date;
      end_date?: Date;
      sheet_name?: string;
    }
  ) => {
    return await weeksRepository.update(week_id, data);
  },

  delete: async (week_id: string) => {
    return await weeksRepository.delete(week_id);
  },

  getOrCreateWeek: async (sheet_name: string, dateStr: string) => {
    if (!dateStr || !dateStr.trim()) {
      throw new Error("Missing required field: date");
    }

    const safeDate: string = normalizeMMDDYYYY(dateStr);

    // 1. Get or create week
    let week = await weeksRepository.findBySheetName(sheet_name);

    if (week) return week;

    // Otherwise create new week
    const { start, end } = getWeekRange(safeDate);
    const week_id = generateWeekId(start);

    return await weeksRepository.create({
      week_id,
      start_date: start,
      end_date: end,
      sheet_name
    });
  },
};
