import prisma from "../config/prisma";

export const weeksRepository = {

  /**
   * Get all weeks
   */
  findAll: async () => prisma.weeks.findMany(),

  /**
   * Find a week by primary key (week_id)
   */
  findById: async (week_id: string) =>
    prisma.weeks.findUnique({
      where: { week_id },
    }),

  /**
   * Find a week by sheet name (e.g. "01-27 - 02-02")
   */
  findBySheetName: async (sheet_name: string) =>
    prisma.weeks.findFirst({
      where: { sheet_name },
    }),

  /**
   * Find week using a date inside the week
   * Example: give date "2024-01-29" → returns week containing that date
   */
  findByDate: async (date: Date) =>
    prisma.weeks.findFirst({
      where: {
        start_date: { lte: date },
        end_date: { gte: date },
      },
    }),

  /**
   * Find week by start_date and end_date
   */
  findByRange: async (start_date: Date, end_date: Date) =>
    prisma.weeks.findFirst({
      where: {
        start_date,
        end_date,
      },
    }),

  /**
   * Check if week already exists
   */
  exists: async (week_id: string): Promise<boolean> => {
    const count = await prisma.weeks.count({
      where: { week_id },
    });
    return count > 0;
  },

  /**
   * Create new week
   */
  create: async (data: {
    week_id: string;
    start_date: Date;
    end_date: Date;
    sheet_name: string;
  }) => prisma.weeks.create({ data }),

  /**
   * Update week info
   */
  update: async (
    week_id: string,
    data: {
      start_date?: Date;
      end_date?: Date;
      sheet_name?: string;
    }
  ) =>
    prisma.weeks.update({
      where: { week_id },
      data,
    }),

  /**
   * Delete a week
   */
  delete: async (week_id: string) => {
    await prisma.weeks.delete({
      where: { week_id },
    });

    return { message: "Deleted successfully", week_id };
  },
};
