import prisma from "../config/prisma";
import { TOPLINE_COLUMNS, TOPLINE_FIELD_MAP } from "../utils/columns";
import { formatByDate, queryByDateRange } from "../utils/dateRangeQuery";

export const topLineRepository = {

  findByDateRange: async (start: string, end: string) => {
    const rows = await queryByDateRange("TopLine", start, end, TOPLINE_COLUMNS);
    return formatByDate(rows as Record<string, any>[], TOPLINE_FIELD_MAP);
  },
  /**
   * Get all records
   */
  findAll: async () => prisma.topLine.findMany(),

  /**
   * Find one by primary key ID
   */
  findById: async (id: bigint) =>
    prisma.topLine.findUnique({
      where: { id },
    }),


  /**
   * Find all rows for a given week
   */
  findByWeek: async (week_id: string) =>
    prisma.topLine.findMany({
      where: { week_id },
      orderBy: { date: "asc" },
    }),

  /**
   * Create a topline row
   */
  create: async (data: {
    week_id: string;
    date: string;
    day_name: string;
    mod_name?: string | null;

    total_sales: number;
    lunch_sales: number;
    dinner_sales: number;

    total_forecast: number;
    forecast_lunch: number;
    forecast_dinner: number;

    comp_total: number;
    void_total: number;

    guest_count: number;
    training_hours?: string;
  }) => {
    return await prisma.topLine.create({ data });
  },


  /**
   * Update a topline row
   */
  update: async (
    id: bigint,
    data: {
      date?: string;
      day_name?: string;
      mod_name?: string | null;

      total_sales: number;
      lunch_sales?: number;
      dinner_sales?: number;

      total_forecast: number;
      forecast_lunch?: number;
      forecast_dinner?: number;

      comp_total?: number;
      void_total?: number;

      guest_count?: number;
      training_hours?: string;
    }
  ) => {
    return await prisma.topLine.update({
      where: { id },
      data,
    });
  },

  /**
   * Delete a record
   */
  delete: async (id: bigint) => {
    await prisma.topLine.delete({
      where: { id },
    });
    return { message: "Deleted successfully", id };
  },

  /**
   * UPSERT using composite unique (week_id + date)
   */
  upsertByWeekAndDate: async (
    week_id: string,
    date: string,
    day_name: string,
    field: string,
    value: any
  ) => {
    return await prisma.topLine.upsert({
      where: {
        week_id_date: {
          week_id,
          date
        }
      },
      update: {
        [field]: value
      },
      create: {
        week_id,
        date,
        day_name,
        [field]: value
      }
    });
  },
};
