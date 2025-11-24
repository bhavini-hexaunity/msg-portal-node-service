import Joi from "joi";

export const createRestaurantSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

export const updateRestaurantSchema = Joi.object({
  id: Joi.string().uuid().required(),
  name: Joi.string().min(2).required(),
});

export const idParamSchema = Joi.object({
  id: Joi.string().uuid().required(),
});
