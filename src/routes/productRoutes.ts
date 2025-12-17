import express from "express";
import { calculateDiscount } from "../controllers/productController.js";
import type { Product } from "../controllers/productController.js";

const router = express.Router();

router.post("/discount", (req, res) => {
  const { name, price, discount } = req.body as Product & { discount: number };
  if (typeof name !== "string" || typeof price !== "number" || typeof discount !== "number") {
    return res.status(400).send("Invalid data");
  }

  const newPrice = calculateDiscount({ name, price }, discount);
  res.json({ name, originalPrice: price, discount, newPrice });
});

export default router;

