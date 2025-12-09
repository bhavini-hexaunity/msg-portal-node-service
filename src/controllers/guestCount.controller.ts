import { RequestHandler } from "express";
import { guestCountService } from "../services/guestCount.service";

export const list: RequestHandler = async (req, res) => {
    const data = await guestCountService.findAll();
    res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!); 
    const data = await guestCountService.findById(id);
    res.json({ success: true, data });
};