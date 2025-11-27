import Joi from "joi";

const mmddyyyy = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/;

export const createTopLineSchema = Joi.object({
  week_id: Joi.string().required(),

  date: Joi.string().pattern(mmddyyyy).required(),

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
  date: Joi.string().pattern(mmddyyyy).optional(),

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

export const syncToplineSchema = Joi.object({
  sheet_name: Joi.string().required(),

  field: Joi.string()
    .valid(
      "lunch_sales",
      "dinner_sales",
      "forecast_lunch",
      "forecast_dinner",
      "comp_total",
      "void_total",
      "guest_count",
      "training_hours",
      "mod_name",
      "day_name",
    ).required(),

  date: Joi.string()
    .pattern(/^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/) // MM/DD/YYYY
    .required(),

  day_name: Joi.string().optional().allow(null, ""),

  value: Joi.alternatives()
    .try(
      Joi.number(),
      Joi.string().allow("", null)
    )
    .optional(),

});