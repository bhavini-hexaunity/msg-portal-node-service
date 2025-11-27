// src/validations/weeks.validation.ts
import Joi from "joi";

export const createWeekSchema = Joi.object({
  week_id: Joi.string().required(),
  start_date: Joi.date().iso().required(),
  end_date: Joi.date().iso().required(),
  sheet_name: Joi.string().required(),
});

export const updateWeekSchema = Joi.object({
  start_date: Joi.date().iso().optional(),
  end_date: Joi.date().iso().optional(),
  sheet_name: Joi.string().optional(),
});

export const idParamSchema = Joi.object({
  week_id: Joi.string().required(),
});
