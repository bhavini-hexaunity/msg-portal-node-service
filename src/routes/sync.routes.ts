import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import * as syncController from "../controllers/sync.controller";
import { validate } from "../middleware/validate";
import { syncDepositSchema, syncFoodCostTrackingSchema, syncOperationsSchema, syncPeopleSchema, syncProfitSchema, syncSalesPerHourSchema, syncScheduledStaffSchema, syncToplineSchema } from "../validations/sync.validation";

const router = Router();

router.get(
  "/range",
  asyncHandler(syncController.getByDateRange)
);

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

router.post(
  "/operations",
  validate(syncOperationsSchema, "body"),
  asyncHandler(syncController.handleOperationsSync)
);

router.post(
  "/people",
  validate(syncPeopleSchema, "body"),
  asyncHandler(syncController.handlePeopleSync)
);


router.post(
  "/sales-hour",
  validate(syncSalesPerHourSchema, "body"),
  asyncHandler(syncController.handleSalesPerHourSync)
);

router.post(
  "/scheduled-staff",
  validate(syncScheduledStaffSchema, "body"),
  asyncHandler(syncController.handleScheduledStaffSync)
);

router.post(
  "/food-cost",
  validate(syncFoodCostTrackingSchema, "body"),
  asyncHandler(syncController.handleFoodCostTrackingSync)
);



export default router;
