import { scheduledStaffRepository } from "../repositories/scheduledStaff.repository";

export const scheduledService = {
  findAll: () => scheduledStaffRepository.findAll(),
  findById: (id: bigint) => scheduledStaffRepository.findById(BigInt(id)),
};
