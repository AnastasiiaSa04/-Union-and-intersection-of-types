import express from "express";
import { myCar, printCarInfo } from "../controllers/carController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(myCar);
});

router.get("/info", (req, res) => {
  printCarInfo(myCar); 
  res.send("Car info printed to console");
});

export default router;

