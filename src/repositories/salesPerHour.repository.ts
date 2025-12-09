import prisma from "../config/prisma";

export const salesPerHourRepository = {
  findAll: async () => {
    return await prisma.salesPerHour.findMany({
      orderBy: { date: "asc" },
    });
  },

  findById: async (id: bigint) => {
    return await prisma.salesPerHour.findUnique({
      where: { id },
    });
  },
  upsertHour: async (week_id: string, date: string, hour: string, amount: number | null) =>
    prisma.salesPerHour.upsert({
      where: { sales_hour_unique: { week_id, date, hour } },
      update: { amount },
      create: { week_id, date, hour, amount }
    })
};
