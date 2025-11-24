import express,{Request,Response,NextFunction, Application} from 'express';
import cors from "cors";
import morgan from "morgan";
import restaurantRoutes from "./routes/restaurants.routes"
import { errorHandler } from "./middleware/errorHandler";

const app: Application = express();

// ------------------------
// Global Middlewares
// ------------------------
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Logs all requests in dev mode

// ------------------------
// Health Check Route
// ------------------------
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// ------------------------
// API Routes
// ------------------------
app.use("/api/v1/restaurants", restaurantRoutes);

// ------------------------
// 404 Handler
// ------------------------
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ------------------------
// Global Error Handler
// ------------------------
app.use(errorHandler);

export default app;