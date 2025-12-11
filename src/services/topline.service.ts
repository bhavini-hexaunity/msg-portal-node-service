import { topLineRepository } from "../repositories/topline.repository";

export const topLineService = {
  findAll: async () => {
    return await topLineRepository.findAll();
  },
  
  findByDateRange: async (start: string, end: string) =>
    topLineRepository.findByDateRange(start, end),

  findById: async (id: bigint) => {
    return await topLineRepository.findById(id);
  },

  findByWeek: async (week_id: string) => {
    return await topLineRepository.findByWeek(week_id);
  },

  create: async (payload: any) => {
    return await topLineRepository.create(payload);
  },

  update: async (id: bigint, data: any) => {
    return await topLineRepository.update(id, data);
  },

  delete: async (id: bigint) => {
    return await topLineRepository.delete(id);
  },
};
