import prisma from "../config/prisma";

export const scheduledStaffRepository = {
  findAll: async () => {
    return await prisma.scheduledStaff.findMany({
      orderBy: { date: "asc" },
    });
  },

  findById: async (id: bigint) => {
    return await prisma.scheduledStaff.findUnique({
      where: { id },
    });
  },
  upsert: async (week_id: string, date: string, role: string, shift: "AM" | "PM", count: number) =>
    prisma.scheduledStaff.upsert({
      where: { week_id_date_role_shift: { week_id, date, role, shift } },
      update: { count },
      create: { week_id, date, role, shift, count }
    })
};
