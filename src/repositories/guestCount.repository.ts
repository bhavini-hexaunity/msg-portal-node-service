import prisma from "../config/prisma";

export const guestCountRepository = {
  findAll: async () => {
    return await prisma.guestCountPerHour.findMany({
      orderBy: { date: "asc" },
    });
  },

  findById: async (id: bigint) => {
    return await prisma.guestCountPerHour.findUnique({
      where: { id },
    });
  },
  upsertHour: async (week_id: string, date: string, hour: string, count: number | null) =>
    prisma.guestCountPerHour.upsert({
      where: { guestcount_week_date_hour: { week_id, date, hour } },
      update: { count },
      create: { week_id, date, hour, count }
    })
};
