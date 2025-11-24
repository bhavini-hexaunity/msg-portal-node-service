import { restaurantsRepository } from "../repositories/restaurants.repository";

export const restaurantsService = {
  findAll: async () => {
    return await restaurantsRepository.findAll();
  },

  findById: async (id: string) => {
    return await restaurantsRepository.findById(id);
  },

  create: async (name: string) => {
    return await restaurantsRepository.create(name);
  },

  update: async (id: string, name: string) => {
    return await restaurantsRepository.update(id, name);
  },

  delete: async (id: string) => {
    return await restaurantsRepository.delete(id);
  },
};
