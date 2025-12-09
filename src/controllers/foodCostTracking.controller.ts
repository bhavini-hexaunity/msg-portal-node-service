import { RequestHandler } from "express";
import { foodCostTrackingService } from "../services/foodCostTracking.service";

export const list: RequestHandler = async (req, res) => {
    const data = await foodCostTrackingService.findAll();
    res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!); 
    const data = await foodCostTrackingService.findById(id);
    res.json({ success: true, data });
};