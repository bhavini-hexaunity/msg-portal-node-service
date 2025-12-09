import { RequestHandler } from "express";
import { syncDepositService, syncProfitService, syncToplineService, 
  syncScheduleService, syncFoodCostTrackingService, 
  syncOperationsService,syncPeopleService,syncSalesPerHourService } from "../services/sync.service";

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
  