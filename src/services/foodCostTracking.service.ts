import { foodCostRepository } from "../repositories/foodCostTracking.repository";

export const foodCostTrackingService = {
  findAll: () => foodCostRepository.findAll(),
  findById: (id: bigint) => foodCostRepository.findById(BigInt(id)),
};
