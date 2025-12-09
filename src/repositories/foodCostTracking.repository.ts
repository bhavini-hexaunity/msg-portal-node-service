import prisma from "../config/prisma";

export const foodCostRepository = {
  findAll: async () => {
    return await prisma.foodCostTracking.findMany({
      orderBy: { date: "asc" },
    });
  },

  findById: async (id: bigint) => {
    return await prisma.foodCostTracking.findUnique({
      where: { id },
    });
  },
  upsert: async (week_id: string, date: string, vendor: string, amount: number | null) =>
    prisma.foodCostTracking.upsert({
      where: { foodcost_week_date_vendor: { week_id, date, vendor } },
      update: { amount },
      create: { week_id, date, vendor, amount }
    })
};

