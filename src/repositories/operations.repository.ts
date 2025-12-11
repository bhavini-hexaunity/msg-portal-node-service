import prisma from "../config/prisma";
import { GUEST_COUNT_COLUMNS, mapGuestField, OPERATIONS_COLUMNS, OPERATIONS_FIELD_MAP } from "../utils/columns";
import { queryByDateRange } from "../utils/dateRangeQuery";

export const operationsRepository = {
  findByDateRange: async (start: string, end: string) => {
    const ops = await queryByDateRange("Operations", start, end, OPERATIONS_COLUMNS);
    const guestRows = await queryByDateRange("GuestCountPerHour", start, end, GUEST_COUNT_COLUMNS);
    const output: Record<string, Record<string, any>> = {};
    // ---- A. Process base Operations fields ----
    for (const row of ops as any[]) {
      const date = row.date as string;

      if (!output[date]) output[date] = {};

      // Map static fields
      for (const key in OPERATIONS_FIELD_MAP) {
        const dbField = OPERATIONS_FIELD_MAP[key as keyof typeof OPERATIONS_FIELD_MAP];
        output[date][key] = row[dbField];
      }
    }

    // ---- B. Process Guest Count hourly fields ----
    for (const g of guestRows as any[]) {
      const date = g.date as string;

      if (!output[date]) output[date] = {};

      const key = mapGuestField(g.hour); // guest_11_12 etc.
      output[date][key] = g.count;
    }

    return output;
  },
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
