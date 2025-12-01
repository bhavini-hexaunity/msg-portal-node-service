import { Router } from "express";
import * as controller from "../controllers/topline.controller";
import { validate } from "../middleware/validate";
import { asyncHandler } from "../middleware/asyncHandler";

import {
  createTopLineSchema,
  updateTopLineSchema,
  idParamSchema,
  weekIdParamSchema,
} from "../validations/topline.validation";

const router = Router();

// GET all topline rows
router.get("/", asyncHandler(controller.list));

router.get("/range", asyncHandler(controller.getByDateRange));


// GET by week_id
router.get(
  "/week/:week_id",
  validate(weekIdParamSchema, "params"),
  asyncHandler(controller.getByWeek)
);

// GET by id
router.get(
  "/:id",
  validate(idParamSchema, "params"),
  asyncHandler(controller.getById)
);

// CREATE
router.post(
  "/",
  validate(createTopLineSchema, "body"),
  asyncHandler(controller.create)
);

// UPDATE
router.put(
  "/:id",
  validate(idParamSchema, "params"),
  validate(updateTopLineSchema, "body"),
  asyncHandler(controller.updateById)
);

// DELETE
router.delete(
  "/:id",
  validate(idParamSchema, "params"),
  asyncHandler(controller.deleteById)
);

export default router;
