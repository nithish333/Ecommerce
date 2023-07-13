import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.send(product);
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Serving running on port" + 5000);
});
