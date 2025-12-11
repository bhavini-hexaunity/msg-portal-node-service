import { RequestHandler } from "express";
import {
  syncDepositService, syncProfitService, syncToplineService,
  syncScheduleService, syncFoodCostTrackingService,
  syncOperationsService, syncPeopleService, syncSalesPerHourService
} from "../services/sync.service";

export const getByDateRange: RequestHandler = async (req, res) => {
  const { start, end } = req.query;
  if (!start || !end) {
    return res.status(400).json({
      success: false,
      message: "start and end query params are required",
    });
  }
  const result = await syncToplineService.get(start as string, end as string);
  res.json({ success: true , data: result });
};

export const handleToplineSync: RequestHandler = async (req, res) => {
  const result = await syncToplineService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleProfitSync: RequestHandler = async (req, res) => {
  const result = await syncProfitService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleDepositSync: RequestHandler = async (req, res) => {
  const result = await syncDepositService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleScheduledStaffSync: RequestHandler = async (req, res) => {
  const result = await syncScheduleService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleFoodCostTrackingSync: RequestHandler = async (req, res) => {
  const result = await syncFoodCostTrackingService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleOperationsSync: RequestHandler = async (req, res) => {
  const result = await syncOperationsService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handlePeopleSync: RequestHandler = async (req, res) => {
  const result = await syncPeopleService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleSalesPerHourSync: RequestHandler = async (req, res) => {
  const result = await syncSalesPerHourService.upsert(req.body);
  res.json({ success: true, data: result });
};
