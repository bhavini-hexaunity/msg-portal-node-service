import { RequestHandler } from "express";
import { syncToplineService } from "../services/syncTopline.service";

export const handleToplineSync: RequestHandler = async (req, res) => {
  const result = await syncToplineService.upsert(req.body);
  res.json({ success: true, data: result });
};
