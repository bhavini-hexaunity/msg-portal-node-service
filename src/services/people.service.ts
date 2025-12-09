import { peopleRepository } from "../repositories/people.repository";

export const peopleService = {
  findAll: () => peopleRepository.findAll(),
  findById: (id: bigint) => peopleRepository.findById(BigInt(id)),
};
