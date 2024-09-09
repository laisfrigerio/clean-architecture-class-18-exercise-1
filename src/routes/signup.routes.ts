import express, { Request, Response } from "express";
import { signUp } from "../service/signup.service";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const input = req.body;
  try {
    const account = await signUp(input);
    res.status(201).json(account);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

export default router;
