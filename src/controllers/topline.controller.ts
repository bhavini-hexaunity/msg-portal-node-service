import { RequestHandler } from "express";
import { topLineService } from "../services/topline.service";

export const list: RequestHandler = async (req, res) => {
  const data = await topLineService.findAll();
  res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
  const id = BigInt(req.params.id!); // safe because Joi validated
  const data = await topLineService.findById(id);
  res.json({ success: true, data });
};

export const getByWeek: RequestHandler = async (req, res) => {
  const week_id = req.params.week_id!; // safe because Joi validated
  const data = await topLineService.findByWeek(week_id);
  res.json({ success: true, data });
};

export const create: RequestHandler = async (req, res) => {
  const row = await topLineService.create(req.body);
  res.status(201).json({ success: true, data: row });
};

export const updateById: RequestHandler = async (req, res) => {
  const id = BigInt(req.params.id!); // safe
  const updated = await topLineService.update(id, req.body);
  res.json({ success: true, data: updated });
};

export const deleteById: RequestHandler = async (req, res) => {
  const id = BigInt(req.params.id!); // safe
  const result = await topLineService.delete(id);
  res.json({ success: true, data: result });
};
