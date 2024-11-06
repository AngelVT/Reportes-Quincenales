import { Router } from "express";
import * as appControl from "../controllers/app.controller.js";

const router = Router();

router.get('/main', appControl.goMainMenu);

router.get('/activityReport', appControl.goEditorActivityReport);

router.get('/vacationRequest', appControl.goEditorVacationRequest);

router.get('/materialRequest', appControl.goEditorMaterialRequest);

router.post('/activityReportPDF', appControl.getActivityReportPDF);

router.post('/vacationRequestPDF', appControl.getVacationRequestPDF);

router.post('/materialRequestPDF', appControl.getMaterialRequestPDF);

router.get('/test', appControl.testPDF);

export default router;