// src/controllers/weeks.controller.ts
import { RequestHandler } from "express";
import { weeksService } from "../services/weeks.service";

export const list: RequestHandler = async (req, res) => {
  const year = req.query.year ? Number(req.query.year) : undefined;
  const data = await weeksService.findAll(year);
  res.json({ success: true, data });
};

export const getById: RequestHandler = async (req, res) => {
  const data = await weeksService.findById(req.params.week_id ?? "");
  res.json({ success: true, data });
};

export const create: RequestHandler = async (req, res) => {
  const week = await weeksService.create(req.body);
  res.status(201).json({ success: true, data: week });
};

export const updateById: RequestHandler = async (req, res) => {
  const updated = await weeksService.update(req.params.week_id ?? "", req.body);
  res.json({ success: true, data: updated });
};

export const deleteById: RequestHandler = async (req, res) => {
  const result = await weeksService.delete(req.params.week_id ?? "");
  res.json({ success: true, data: result });
};
