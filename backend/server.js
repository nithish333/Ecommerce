import express from "express";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT || 8000, () => {
  console.log("Serving running on port" + 5000);
});
