import Router from "express"
import { createNewDate, getAnswers } from "../controller/dateController.js";

const router = Router();

router.post("/create", createNewDate)
router.get("/answers/juan", getAnswers)

export default router;