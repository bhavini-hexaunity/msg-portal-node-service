import Joi from "joi";
import { Constant } from "../utils/app.constant";


export const syncToplineSchema = Joi.object({
  sheet_name: Joi.string().required(),

  field: Joi.string()
    .valid(
      "total_sales",
      "lunch_sales",
      "dinner_sales",
      "total_forecast",
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
    .pattern(Constant.mmddyyyy)
    .required(),

  day_name: Joi.string().optional().allow(null, ""),

  value: Joi.alternatives()
    .try(
      Joi.number(),
      Joi.string().allow("", null)
    )
    .optional(),

});

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

  value: Joi.alternatives()
    .try(Joi.string().allow(""), Joi.number())
    .required()
});

export const syncDepositSchema = Joi.object({
  sheet_name: Joi.string().required(),

  field: Joi.string()
    .valid("actual", "amount_due")
    .required(),

  date: Joi.string().pattern(Constant.mmddyyyy).required(),

  value: Joi.alternatives()
    .try(Joi.string().allow(""), Joi.number())
    .required()
});

export const syncPeopleSchema = Joi.object({
  sheet_name: Joi.string().required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),

  field: Joi.string()
    .valid("total_staff_scheduled", "shoutouts", "staffing_issues")
    .required(),

  value: Joi.alternatives().try(Joi.string().allow("", null), Joi.number())
});

export const syncOperationsSchema = Joi.object({
  sheet_name: Joi.string().required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),
  field: Joi.string().required(), // any field name including hour keys
  value: Joi.alternatives().try(
    Joi.string().allow("", null),
    Joi.number(),
    Joi.boolean()
  ).required()
});

export const syncSalesPerHourSchema = Joi.object({
  sheet_name: Joi.string().required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),
  field: Joi.string().regex(/^sales_\d{1,2}_\d{1,2}$/).required(),
  value: Joi.number().allow(null)
});

export const syncScheduledStaffSchema = Joi.object({
  sheet_name: Joi.string().required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),
  field: Joi.string()
    .pattern(/^.+_(AM|PM)$/)
    .required(),
  value: Joi.number().integer().min(0).required()
});

export const syncFoodCostTrackingSchema = Joi.object({
  sheet_name: Joi.string().required(),
  date: Joi.string().pattern(Constant.mmddyyyy).required(),
  field: Joi.string()
    .regex(/^vendor_[A-Za-z0-9 _\-\/]+$/)
    .required(),
  value: Joi.number().allow(null).default(0)
});
