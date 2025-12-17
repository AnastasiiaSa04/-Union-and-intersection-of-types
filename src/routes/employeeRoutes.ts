import express from "express";
import { employees, getSalaries } from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(employees);
});

router.get("/salaries", (req, res) => {
  res.json(getSalaries(employees));
});

export default router;
