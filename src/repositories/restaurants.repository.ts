import { v4 as uuidv4 } from "uuid";
import prisma from "../config/prisma";

export const restaurantsRepository = {
  // Get all restaurants
  findAll: async () => {
    return await prisma.restaurant.findMany();
  },

  // Get one restaurant by ID
  findById: async (id: string) => {
    return await prisma.restaurant.findUnique({
      where: { id },
    });
  },

  // Create a new restaurant
  create: async (name: string) => {
    const id = uuidv4();

    return await prisma.restaurant.create({
      data: {
        id,
        name,
      },
    });
  },

  // Update by ID
  update: async (id: string, name: string) => {
    return await prisma.restaurant.update({
      where: { id },
      data: { name },
    });
  },

  // Delete by ID
  delete: async (id: string) => {
    await prisma.restaurant.delete({
      where: { id },
    });

    return { message: "Deleted successfully", id };
  },
};