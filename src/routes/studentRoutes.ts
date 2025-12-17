import express from "express";
import { student, printStudentInfo } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(student);
});

router.get("/info", (req, res) => {
  printStudentInfo(student);
  res.send("Student info printed to console");
});

export default router;
