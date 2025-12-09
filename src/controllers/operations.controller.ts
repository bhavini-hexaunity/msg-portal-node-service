import { RequestHandler } from "express";
import { operationService  } from "../services/operations.service";

export const list: RequestHandler = async (req, res) => {
    const data = await operationService.findAll();
    res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!); 
    const data = await operationService.findById(id);
    res.json({ success: true, data });
};