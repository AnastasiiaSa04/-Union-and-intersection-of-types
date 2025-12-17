import express from "express";  
import { adminUser } from "../controllers/adminController.js"; 
import type { Request, Response } from "express";

const router = express.Router(); 

router.get("/", (req: Request, res: Response) => {
  res.json(adminUser);
});

export default router;
