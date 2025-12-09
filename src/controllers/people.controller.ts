import { RequestHandler } from "express";
import { peopleService  } from "../services/people.service";

export const list: RequestHandler = async (req, res) => {
    const data = await peopleService.findAll();
    res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!); 
    const data = await peopleService.findById(id);
    res.json({ success: true, data });
};