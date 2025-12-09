import prisma from "../config/prisma";

export const peopleRepository = {

  findAll: async () => {
    return await prisma.people.findMany({
      orderBy: { date: "asc" },
    });
  },

  findById: async (id: bigint) => {
    return await prisma.people.findUnique({
      where: { id },
    });
  },
  upsertByWeekAndDate: async (week_id: string, date: string, field: string, value: any) =>
    prisma.people.upsert({
      where: { people_week_id_date: { week_id, date } },
      create: { week_id, date, [field]: value },
      update: { [field]: value },
    }),
};


