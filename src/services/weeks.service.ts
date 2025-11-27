import { weeksRepository } from "../repositories/weeks.repository";

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
  
  findBySheetName: async (sheet_name: string) => {

  },
};
