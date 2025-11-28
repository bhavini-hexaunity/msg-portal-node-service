import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import * as syncController from "../controllers/sync.controller";
import { validate } from "../middleware/validate";
import { syncDepositSchema, syncProfitSchema, syncToplineSchema } from "../validations/sync.validation";

const router = Router();

router.post(
  "/topline",
  validate(syncToplineSchema,"body"),
  asyncHandler(syncController.handleToplineSync)
);

router.post(
  "/profit",
  validate(syncProfitSchema,"body"),
  asyncHandler(syncController.handleProfitSync)
);

router.post(
  "/deposit",
  validate(syncDepositSchema, "body"),
  asyncHandler(syncController.handleDepositSync)
);

export default router;
