const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config();

app.use(express.json());

app.post("/api/sheet-sync", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Data received", received: req.body });
});

// Routes
const restaurantRoutes = require("./src/api/routes/restaurants.routes");
app.use("/restaurants", restaurantRoutes);



// Error handler
const errorHandler = require("./src/middlewares/error-handler");
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
