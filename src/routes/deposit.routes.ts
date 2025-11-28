import { Router } from "express";
import * as controller from "../controllers/deposit.controller";

import { validate } from "../middleware/validate";
import { asyncHandler } from "../middleware/asyncHandler";

import {
  createDepositSchema,
  updateDepositSchema,
  idParamSchema,
  weekIdParamSchema,
} from "../validations/deposit.validation";

const router = Router();

// CRUD
router.get("/", asyncHandler(controller.list));

router.post("/", validate(createDepositSchema, "body"), asyncHandler(controller.create));

router.get("/:id", validate(idParamSchema, "params"), asyncHandler(controller.getById));

router.get("/week/:week_id", validate(weekIdParamSchema, "params"), asyncHandler(controller.findByWeek));

router.put("/:id", validate(updateDepositSchema, "body"), asyncHandler(controller.updateById));

router.delete("/:id", validate(idParamSchema, "params"), asyncHandler(controller.deleteById));


export default router;
