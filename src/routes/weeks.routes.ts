// src/routes/weeks.routes.ts
import { Router } from "express";
import * as controller from "../controllers/weeks.controller";
import { asyncHandler } from "../middleware/asyncHandler";
import { validate } from "../middleware/validate";
import { createWeekSchema, idParamSchema, updateWeekSchema } from "../validations/weeks.validation";


const router = Router();

router.get("/", asyncHandler(controller.list));

router.get(
  "/:week_id",
  validate(idParamSchema, "params"),
  asyncHandler(controller.getById)
);

router.post(
  "/",
  validate(createWeekSchema, "body"),
  asyncHandler(controller.create)
);

router.put(
  "/:week_id",
  validate(updateWeekSchema, "body"),
  asyncHandler(controller.updateById)
);

router.delete(
  "/:week_id",
  validate(idParamSchema, "params"),
  asyncHandler(controller.deleteById)
);

export default router;
