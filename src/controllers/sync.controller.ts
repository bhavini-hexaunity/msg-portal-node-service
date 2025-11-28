import { RequestHandler } from "express";
import { syncDepositService, syncProfitService, syncToplineService } from "../services/sync.service";

export const handleToplineSync: RequestHandler = async (req, res) => {
  console.log("🔥 Topline Payload Received:", req.body);
  const result = await syncToplineService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleProfitSync: RequestHandler = async (req, res) => {
  console.log("📘 Profit Payload Received:", req.body);
  const result = await syncProfitService.upsert(req.body);
  res.json({ success: true, data: result });
};

export const handleDepositSync: RequestHandler = async (req, res) => {
  console.log("💰 Deposit Payload Received:", req.body);
  const result = await syncDepositService.upsert(req.body);
  res.json({ success: true, data: result });
};
