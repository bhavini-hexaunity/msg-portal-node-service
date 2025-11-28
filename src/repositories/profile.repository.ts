import prisma from "../config/prisma";


export const profitRepository = {
    findAll: async () => {
        return await prisma.profit.findMany({
            orderBy: { date: "asc" }
        });
    },
    findById: async (id: bigint) => {
        return await prisma.profit.findUnique({
            where: { id },
        });
    },
    findByWeek: async (week_id: string) => {
        return await prisma.profit.findMany({
            where: { week_id },
            orderBy: { date: "asc" }
        });
    },
    create: async (data: {
        week_id: string;
        date: string;
        main_room_sales?: number;
        patio_sales?: number;
        third_party_sales?: number;
        togo_sales?: number;
        catering?: number;
        alcohol_sales?: number;
        na_bev_sales?: number;
        foh_reg_hours?: number;
        foh_reg_wages?: number;
        foh_ot_hours?: number;
        foh_ot_wages?: number;
        boh_reg_hours?: number;
        boh_reg_wages?: number;
        boh_ot_hours?: number;
        boh_ot_wages?: number;
        comments?: string | null;
    }) => {
        return await prisma.profit.create({ data });
    },
    update: async (
        id: bigint,
        data: {
            date?: string;
            main_room_sals?: number;
            patio_sales?: number;
            third_party_sales?: number;
            togo_sales?: number;
            catering?: number;
            alcohol_sales?: number;
            na_bev_sales: number;
            foh_reg_hours?: number;
            foh_reg_wages?: number;
            foh_ot_hour?: number;
            foh_ot_wages?: number;
            boh_reg_hours?: number;
            boh_reg_wages?: number;
            boh_ot_hours?: number;
            boh_ot_wags?: number;
            comments?: string | null;
        }
    ) => {
        return await prisma.profit.update({
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
        return await prisma.profit.upsert({
            where: {
                profit_week_id_date: {
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
        await prisma.profit.delete({
            where: { id },
        });
        return { message: "Deleted successfully", id };
    },
};
