import prisma from "../config/prisma";
import { FOOD_COST_COLUMNS, } from "../utils/columns";
import { formatByDate, queryByDateRange } from "../utils/dateRangeQuery";

export const foodCostRepository = {
  findByDateRange: async (start: string, end: string) => {
    const rows = await queryByDateRange(
      "FoodCostTracking",
      start,
      end,
      FOOD_COST_COLUMNS
    );
    const output: Record<string, Record<string, number | null>> = {};
    for (const row of rows as any[]) {
      const date = row.date as string;
      if (!output[date]) output[date] = {};
      output[date][row.vendor] = row.amount ?? 0;
    }
    return output;
  },
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

