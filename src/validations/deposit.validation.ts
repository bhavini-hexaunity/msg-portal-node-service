import Joi from "joi";
import { Constant } from "../utils/app.constant";

export const createDepositSchema = Joi.object({
  week_id: Joi.string().required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),

  actual: Joi.number().precision(2).optional().allow(null),
  amount_due: Joi.number().precision(2).optional().allow(null)
});

export const updateDepositSchema = Joi.object({
  date: Joi.string().pattern(Constant.mmddyyyy).optional(),

  actual: Joi.number().precision(2).optional().allow(null),
  amount_due: Joi.number().precision(2).optional().allow(null)
});

export const idParamSchema = Joi.object({
  id: Joi.string().pattern(/^\d+$/).required()
});

export const weekIdParamSchema = Joi.object({
  week_id: Joi.string().required()
});