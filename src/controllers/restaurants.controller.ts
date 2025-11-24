import { RequestHandler } from "express";
import { restaurantsService } from "../services/restaurants.service";

export const list: RequestHandler = async (req, res) => {
  const data = await restaurantsService.findAll();
  res.json({ success: true, data });
};

export const create: RequestHandler = async (req, res) => {
  const restaurant = await restaurantsService.create(req.body.name);
  res.status(201).json({ success: true, data: restaurant });
};

export const get: RequestHandler = async (req, res) => {
  const restaurant = await restaurantsService.findById(req.params.id ?? '');
  res.json({ success: true, data: restaurant });
};

export const updateById: RequestHandler = async (req, res) => {
  const updated = await restaurantsService.update(req.params.id ?? '', req.body.name);
  res.json({ success: true, data: updated });
};

export const deleteById: RequestHandler = async (req, res) => {
  const result = await restaurantsService.delete(req.params.id ?? '');
  res.json({ success: true, data: result });
};
