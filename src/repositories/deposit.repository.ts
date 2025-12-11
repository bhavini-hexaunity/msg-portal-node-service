import prisma from "../config/prisma";
import { DEPOSIT_COLUMNS, DEPOSIT_FIELD_MAP } from "../utils/columns";
import { formatByDate, queryByDateRange } from "../utils/dateRangeQuery";

export const depositRepository = {
    findByDateRange: async (start: string, end: string) => {
        const rows = await queryByDateRange("Deposit", start, end, DEPOSIT_COLUMNS);
        return formatByDate(rows as Record<string, any>[], DEPOSIT_FIELD_MAP);
    },
    findAll: async () => {
        return await prisma.deposit.findMany({
            orderBy: { date: "asc" },
        });
    },

    findById: async (id: bigint) => {
        return await prisma.deposit.findUnique({
            where: { id },
        });
    },
    findByWeek: async (week_id: string) => {
        return await prisma.deposit.findMany({
            where: { week_id },
            orderBy: { date: "asc" }
        });
    },

    create: async (data: {
        week_id: string;
        date: string;
        actual?: number;
        amount_due?: number;
    }) => {
        return await prisma.deposit.create({ data });
    },

    update: async (
        id: bigint,
        data: {
            date?: string;
            actual?: number;
            amount_due?: number;
        }
    ) => {
        return await prisma.deposit.update({
            where: { id },
            data,
        });
    },

    upsertByWeekAndDate: async (
        week_id: string,
        date: string,
        field: string,
        value: any
    ) => {
        return await prisma.deposit.upsert({
            where: {
                deposit_week_id_date: {
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
                [field]: value
            }
        });
    },
    delete: async (id: bigint) => {
        await prisma.deposit.delete({
            where: { id },
        });

        return { message: "Deleted successfully", id };
    },
};
