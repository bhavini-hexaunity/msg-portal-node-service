import { RequestHandler } from "express";
import { scheduledService  } from "../services/scheduledStaff.service";

export const list: RequestHandler = async (req, res) => {
    const data = await scheduledService.findAll();
    res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!); 
    const data = await scheduledService.findById(id);
    res.json({ success: true, data });
};