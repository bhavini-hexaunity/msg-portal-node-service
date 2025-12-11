import { format } from "path";
import prisma from "../config/prisma";
import { PEOPLE_COLUMNS, PEOPLE_FIELD_MAP } from "../utils/columns";
import { formatByDate, queryByDateRange } from "../utils/dateRangeQuery";

export const peopleRepository = {
  findByDateRange: async (start: string, end: string) => {
    const rows = await queryByDateRange("People", start, end, PEOPLE_COLUMNS);
    return formatByDate(rows as Record<string, any>[], PEOPLE_FIELD_MAP);
  },
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


