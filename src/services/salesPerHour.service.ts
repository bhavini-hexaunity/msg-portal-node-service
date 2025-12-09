import { salesPerHourRepository } from "../repositories/salesPerHour.repository";

export const salesPerHourService = {
  findAll: () => salesPerHourRepository.findAll(),
  findById: (id: bigint) => salesPerHourRepository.findById(BigInt(id)),
};
