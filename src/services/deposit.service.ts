import { depositRepository } from "../repositories/deposit.repository";
import { normalizeMMDDYYYY } from "../utils/helper";

export const depositService = {
  findAll: () => depositRepository.findAll(),

  findById: (id: bigint) => depositRepository.findById(BigInt(id)),

  findByWeek: (week_id: string) => depositRepository.findByWeek(week_id),

  create: (payload: any) => {
    payload.date = normalizeMMDDYYYY(payload.date);
    return depositRepository.create(payload);
  },

  update: (id: bigint, payload: any) => {
    if (payload.date) payload.date = normalizeMMDDYYYY(payload.date);
    return depositRepository.update(BigInt(id), payload);
  },

  delete: (id: bigint) => depositRepository.delete(BigInt(id)),

};
