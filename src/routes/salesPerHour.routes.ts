import { Router } from "express";
import * as controller from "../controllers/salesPerHour.controller";

import { validate } from "../middleware/validate";
import { asyncHandler } from "../middleware/asyncHandler";
import { idParamSchema } from "../validations/id.validation";


const router = Router();

// CRUD
router.get("/", asyncHandler(controller.list));

router.get("/:id", validate(idParamSchema, "params"), asyncHandler(controller.getById));


export default router;