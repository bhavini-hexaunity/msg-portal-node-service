import { RequestHandler } from "express";
import { depositService } from "../services/deposit.service";

export const list: RequestHandler = async (req, res) => {
    const data = await depositService.findAll();
    res.json({ success: true, data });
};

export const create: RequestHandler = async (req, res) => {
    const created = await depositService.create(req.body);
    res.status(201).json({ success: true, data: created });
};

export const getById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!); // safe because Joi validated
    const data = await depositService.findById(id);
    res.json({ success: true, data });
};

export const findByWeek: RequestHandler = async (req, res) => {
    const week_id = req.params.week_id!;
    const rows = await depositService.findByWeek(week_id);
    res.json({ success: true, data: rows });
};


export const getByDateRange: RequestHandler = async (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    return res.status(400).json({
      success: false,
      message: "start and end query params are required",
    });
  }

  const data = await depositService.findByDateRange(start as string, end as string);
  res.json({ success: true, data });
};

export const updateById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!);
    const updated = await depositService.update(id, req.body);
    res.json({ success: true, data: updated });
};

export const deleteById: RequestHandler = async (req, res) => {
    const id = BigInt(req.params.id!);
    const result = await depositService.delete(id);
    res.json({ success: true, data: result });
};

