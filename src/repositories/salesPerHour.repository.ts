import prisma from "../config/prisma";
import { mapSalesField, SALES_HOUR_COLUMNS } from "../utils/columns";
import { formatByDate, queryByDateRange } from "../utils/dateRangeQuery";

export const salesPerHourRepository = {
  findByDateRange: async (start: string, end: string) => {
    const rows = await queryByDateRange(
      "SalesPerHour",
      start,
      end,
      SALES_HOUR_COLUMNS
    );
    const output: Record<string, Record<string, number | null>> = {};
    for (const row of rows as any[]) {
      const date = row.date as string;
      if (!output[date]) output[date] = {};
      const key = mapSalesField(row.hour);
      output[date][key] = row.amount ?? 0;
    }
    return output;
  },
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
