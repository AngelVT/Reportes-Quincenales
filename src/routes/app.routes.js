import { Router } from "express";
import * as appControl from "../controllers/app.controller.js";

const router = Router();

router.get('/main', appControl.goEditor);

router.post('/PDF', appControl.getPDF);

router.get('/test', appControl.testPDF)

export default router;