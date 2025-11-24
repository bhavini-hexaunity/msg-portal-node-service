const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { v4: uuidv4 } = require("uuid");

module.exports = {
  // Get all restaurants
  findAll: async () => {
    return await prisma.restaurant.findMany();
  },

  // Get one restaurant by ID
  findById: async (id) => {
    return await prisma.restaurant.findUnique({
      where: { id },
    });
  },

  // Create a new restaurant
  create: async (name) => {
    const id = uuidv4();

    const restaurant = await prisma.restaurant.create({
      data: {
        id,
        name,
      },
    });

    return restaurant;
  },

  // Update by ID
  update: async (id, name) => {
    const restaurant = await prisma.restaurant.update({
      where: { id },
      data: { name },
    });

    return restaurant;
  },

  // Delete by ID
  delete: async (id) => {
    await prisma.restaurant.delete({
      where: { id },
    });
    return { message: "Deleted successfully", id };
  },
};
