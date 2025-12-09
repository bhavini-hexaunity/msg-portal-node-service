import { RequestHandler } from "express";
import { salesPerHourService  } from "../services/salesPerHour.service";

export const list: RequestHandler = async (req, res) => {
    const data = await salesPerHourService.findAll();
    res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!); 
    const data = await salesPerHourService.findById(id);
    res.json({ success: true, data });
};