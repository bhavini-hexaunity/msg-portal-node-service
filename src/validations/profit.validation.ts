import Joi from "joi";
import { Constant } from "../utils/app.constant";


export const createProfitSchema = Joi.object({
  week_id: Joi.string().required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),

  main_room_sales: Joi.number().precision(2).optional().allow(null),
  patio_sales: Joi.number().precision(2).optional().allow(null),
  third_party_sales: Joi.number().precision(2).optional().allow(null),
  togo_sales: Joi.number().precision(2).optional().allow(null),
  catering: Joi.number().precision(2).optional().allow(null),

  alcohol_sales: Joi.number().precision(2).optional().allow(null),
  na_bev_sales: Joi.number().precision(2).optional().allow(null),

  third_party_fees: Joi.number().precision(2).optional().allow(null),

  foh_reg_hours: Joi.number().precision(2).optional().allow(null),
  foh_reg_wages: Joi.number().precision(2).optional().allow(null),
  foh_ot_hours: Joi.number().precision(2).optional().allow(null),
  foh_ot_wages: Joi.number().precision(2).optional().allow(null),

  boh_reg_hours: Joi.number().precision(2).optional().allow(null),
  boh_reg_wages: Joi.number().precision(2).optional().allow(null),
  boh_ot_hours: Joi.number().precision(2).optional().allow(null),
  boh_ot_wages: Joi.number().precision(2).optional().allow(null),

  comments: Joi.string().allow("", null).optional()
});

export const updateProfitSchema = Joi.object({
  date: Joi.string().pattern(Constant.mmddyyyy).optional(),

  main_room_sales: Joi.number().precision(2).optional().allow(null),
  patio_sales: Joi.number().precision(2).optional().allow(null),
  third_party_sales: Joi.number().precision(2).optional().allow(null),
  togo_sales: Joi.number().precision(2).optional().allow(null),
  catering: Joi.number().precision(2).optional().allow(null),

  alcohol_sales: Joi.number().precision(2).optional().allow(null),
  na_bev_sales: Joi.number().precision(2).optional().allow(null),

  third_party_fees: Joi.number().precision(2).optional().allow(null),

  foh_reg_hours: Joi.number().precision(2).optional().allow(null),
  foh_reg_wages: Joi.number().precision(2).optional().allow(null),
  foh_ot_hours: Joi.number().precision(2).optional().allow(null),
  foh_ot_wages: Joi.number().precision(2).optional().allow(null),

  boh_reg_hours: Joi.number().precision(2).optional().allow(null),
  boh_reg_wages: Joi.number().precision(2).optional().allow(null),
  boh_ot_hours: Joi.number().precision(2).optional().allow(null),
  boh_ot_wages: Joi.number().precision(2).optional().allow(null),

  comments: Joi.string().allow("", null).optional()
});

export const idParamSchema = Joi.object({
  id: Joi.string().pattern(/^\d+$/).required()
});

export const weekIdParamSchema = Joi.object({
  week_id: Joi.string().required()
});

/**
 * Schema for sync endpoint (sheet -> API)
 * Accepts mm/dd/yyyy and value as number or empty string
 */
export const syncProfitSchema = Joi.object({
  sheet_name: Joi.string().required(),
  field: Joi.string()
    .valid(
      "main_room_sales",
      "patio_sales",
      "third_party_sales",
      "togo_sales",
      "catering",
      "alcohol_sales",
      "na_bev_sales",
      "third_party_fees",
      "foh_reg_hours",
      "foh_reg_wages",
      "foh_ot_hours",
      "foh_ot_wages",
      "boh_reg_hours",
      "boh_reg_wages",
      "boh_ot_hours",
      "boh_ot_wages",
      "comments"
    )
    .required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),
  value: Joi.alternatives().try(Joi.number(), Joi.string().allow("")).required()
});
