import { Router } from "express";
import * as controller from "../controllers/profit.controller";
import { validate } from "../middleware/validate";
import { asyncHandler } from "../middleware/asyncHandler";
import {
  createProfitSchema,
  updateProfitSchema,
  idParamSchema
} from "../validations/profit.validation";

const router = Router();

router.get("/", asyncHandler(controller.list));

router.get("/range", asyncHandler(controller.getByDateRange));

router.post("/", validate(createProfitSchema, "body"), asyncHandler(controller.create));

router.get("/:id", validate(idParamSchema, "params"), asyncHandler(controller.getById));

router.put("/:id", validate(updateProfitSchema, "body"), asyncHandler(controller.updateById));

router.delete("/:id", validate(idParamSchema, "params"), asyncHandler(controller.deleteById));


export default router;
