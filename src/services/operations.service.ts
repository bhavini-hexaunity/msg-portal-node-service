import { operationsRepository } from "../repositories/operations.repository";

export const operationService = {
  findAll: () => operationsRepository.findAll(),
  findById: (id: bigint) => operationsRepository.findById(BigInt(id)),
};
