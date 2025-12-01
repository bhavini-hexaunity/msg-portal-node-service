import { profitRepository } from "../repositories/profit.repository";

export const profitService = {
  findAll: async () => {
    return await profitRepository.findAll();
  },

  findById: async (id: bigint) => {
    return await profitRepository.findById(id);
  },

  findByWeek: async (week_id: string) => {
    return await profitRepository.findByWeek(week_id);
  },

  findByDateRange: async (start: string, end: string) => { 
    return await profitRepository.findByDateRange(start, end); 
  },

  create: async (payload: any) => {
    return await profitRepository.create(payload);
  },

  update: async (id: bigint, data: any) => {
    return await profitRepository.update(id, data);
  },

  delete: async (id: bigint) => {
    return await profitRepository.delete(id);
  },
};
