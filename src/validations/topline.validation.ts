import Joi from "joi";
import { Constant } from "../utils/app.constant";


export const createTopLineSchema = Joi.object({
  week_id: Joi.string().required(),

  date: Joi.string().pattern(Constant.mmddyyyy).required(),

  day_name: Joi.string().optional().allow(null, ""),
  mod_name: Joi.string().optional().allow(null, ""),

  lunch_sales: Joi.number().precision(2).default(0),
  dinner_sales: Joi.number().precision(2).default(0),

  forecast_lunch: Joi.number().precision(2).default(0),
  forecast_dinner: Joi.number().precision(2).default(0),

  comp_total: Joi.number().precision(2).default(0),
  void_total: Joi.number().precision(2).default(0),

  guest_count: Joi.number().integer().default(0),
  training_hours: Joi.string().optional(),
});

export const updateTopLineSchema = Joi.object({
  date: Joi.string().pattern(Constant.mmddyyyy).optional(),

  day_name: Joi.string().optional().allow(null, ""),
  mod_name: Joi.string().optional().allow(null, ""),

  lunch_sales: Joi.number().precision(2).optional(),
  dinner_sales: Joi.number().precision(2).optional(),

  forecast_lunch: Joi.number().precision(2).optional(),
  forecast_dinner: Joi.number().precision(2).optional(),

  comp_total: Joi.number().precision(2).optional(),
  void_total: Joi.number().precision(2).optional(),

  guest_count: Joi.number().integer().optional(),
  training_hours: Joi.string().optional(),
});

export const idParamSchema = Joi.object({
  id: Joi.string().pattern(/^\d+$/).required(),
});

export const weekIdParamSchema = Joi.object({
  week_id: Joi.string().required(),
});

