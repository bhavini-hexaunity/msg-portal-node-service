import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import * as toplineController from "../controllers/syncTopline.controller";
import { validate } from "../middleware/validate";
import { syncToplineSchema } from "../validations/topline.validation";

const router = Router();

router.post(
  "/topline",
  validate(syncToplineSchema,"body"),
  asyncHandler(toplineController.handleToplineSync)
);

export default router;
