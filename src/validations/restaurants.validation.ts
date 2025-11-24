import Joi from "joi";

export const createRestaurantSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().min(2).required(),
  }),
});

export const updateRestaurantSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().uuid().required(),
  }),
  body: Joi.object({
    name: Joi.string().min(2).required(),
  }),
});

export const idParamSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().uuid().required(),
  }),
});
