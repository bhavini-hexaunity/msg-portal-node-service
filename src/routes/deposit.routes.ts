import { Router } from "express";
import * as controller from "../controllers/deposit.controller";

import { validate } from "../middleware/validate";
import { asyncHandler } from "../middleware/asyncHandler";

import {
  createDepositSchema,
  updateDepositSchema,
  weekIdParamSchema,
} from "../validations/deposit.validation";
import { idParamSchema } from "../validations/id.validation";

const router = Router();

// CRUD
router.get("/", asyncHandler(controller.list));
router.get("/range", asyncHandler(controller.getByDateRange));


router.post("/", validate(createDepositSchema, "body"), asyncHandler(controller.create));

router.get("/:id", validate(idParamSchema, "params"), asyncHandler(controller.getById));

router.get("/week/:week_id", validate(weekIdParamSchema, "params"), asyncHandler(controller.findByWeek));

router.put("/:id", validate(updateDepositSchema, "body"), asyncHandler(controller.updateById));

router.delete("/:id", validate(idParamSchema, "params"), asyncHandler(controller.deleteById));


export default router;
