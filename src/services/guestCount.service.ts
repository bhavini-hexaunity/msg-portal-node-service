import { guestCountRepository } from "../repositories/guestCount.repository";

export const guestCountService = {
  findAll: () => guestCountRepository.findAll(),
  findById: (id: bigint) => guestCountRepository.findById(BigInt(id)),
};
