import { Router } from "express";
import * as controller from "../controllers/restaurants.controller";
import { validate } from "../middleware/validate";
import {
  createRestaurantSchema,
  updateRestaurantSchema,
  idParamSchema,
} from "../validations/restaurants.validation";

import { asyncHandler } from "../middleware/asyncHandler";
const router = Router();

router.get("/", asyncHandler(controller.list));

router.post("/", validate(createRestaurantSchema, "body"), asyncHandler(controller.create));

router.get("/:id", validate(idParamSchema, "params"), asyncHandler(controller.get));

router.put("/:id", validate(updateRestaurantSchema, "body"), asyncHandler(controller.updateById));

router.delete("/:id", validate(idParamSchema, "params"), asyncHandler(controller.deleteById));

export default router;