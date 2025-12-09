import prisma from "../config/prisma";

export const operationsRepository = {
  findAll: async () => {
    return await prisma.operations.findMany({
      orderBy: { date: "asc" },
    });
  },

  findById: async (id: bigint) => {
    return await prisma.operations.findUnique({
      where: { id },
    });
  },
  findByWeekAndDate: async (week_id: string, date: string) =>
    prisma.operations.findUnique({
      where: { operations_week_id_date: { week_id, date } }
    }),

upsertGuestCount: async (week_id: string, date: string, hour: string, count: number | null) =>
    prisma.guestCountPerHour.upsert({
      where: {
        guestcount_week_date_hour: {
          week_id,
          date,
          hour   // 🔥 REQUIRED
        }
      },
      create: {
        week_id,
        date,
        hour,
        count
      },
      update: {
        count
      },
    }),

  upsertByWeekAndDate: async (week_id: string, date: string, field: string, value: any) =>
    prisma.operations.upsert({
      where: { operations_week_id_date: { week_id, date } },
      create: { week_id, date, [field]: value },
      update: { [field]: value },
    }),
};
