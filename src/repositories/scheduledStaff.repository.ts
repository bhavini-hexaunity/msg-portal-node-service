import prisma from "../config/prisma";
import { mapScheduleField, SCHEDULE_COLUMNS } from "../utils/columns";
import { queryByDateRange } from "../utils/dateRangeQuery";

export const scheduledStaffRepository = {
  findByDateRange: async (start: string, end: string) => {
    const rows = await queryByDateRange(
      "ScheduledStaff",
      start,
      end,
      SCHEDULE_COLUMNS
    );
    const output: Record<string, Record<string, number | null>> = {};
    for (const row of rows as any[]) {
      const date = row.date as string;
      if (!output[date]) output[date] = {};
      const key = mapScheduleField(row.role, row.shift);
      output[date][key] = row.count ?? 0;
    }
    return output;
  },
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
