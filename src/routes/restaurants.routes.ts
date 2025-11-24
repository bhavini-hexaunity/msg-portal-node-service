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

router.get("/:id", validate(idParamSchema), asyncHandler(controller.get));

router.post("/", validate(createRestaurantSchema), asyncHandler(controller.create));

router.put("/:id", validate(updateRestaurantSchema), asyncHandler(controller.updateById));

router.delete("/:id", validate(idParamSchema), asyncHandler(controller.deleteById));

export default router;