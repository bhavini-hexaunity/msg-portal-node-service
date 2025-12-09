import Joi from "joi";

export const idParamSchema = Joi.object({
  id: Joi.string().pattern(/^\d+$/).required()
});