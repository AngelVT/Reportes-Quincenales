import path from "path"
import { __dirname } from "../paths.js";
import { printerPDF } from "../lib/configPDF.js";
import { generateReport } from "../models/report.js";
import { generatePDF } from "../models/materialReq.js";
import { dataExample } from "../models/docUtils/utils.js";

export const goMainMenu = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } catch (error) {
        res.status(500).json({msg: "Error on server"});
    }
}

export const goEditorActivityReport = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'editorActivityReport.html'));
    } catch (error) {
        res.status(500).json({msg: "Error on server"});
    }
}

export const goEditorVacationRequest = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'editorVacationRequest.html'));
    } catch (error) {
        res.status(500).json({msg: "Error on server"});
    }
}

export const goEditorMaterialRequest = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'editorMaterialRequest.html'));
    } catch (error) {
        res.status(500).json({msg: "Error on server"});
    }
}

export const getActivityReportPDF = async (req, res) => {
    try {
        const body = req.body;

        if(!body.period || !body.name || !body.adscriptionArea || !body.position || !body.areaDirector || !body.directorPosition || !body.signaturesBreak || !body.activities) {
            console.log(body)
            res.status(404).json({msg: "Information incomplete"});
            return;
        }

        const def = generateReport(body);

        const pdfDoc = await printerPDF.createPdfKitDocument(def);

        res.setHeader('Content-Type', 'application/pdf');
        pdfDoc.info.Title = "Reporte de Actividades";
        pdfDoc.pipe(res);
        pdfDoc.end();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error on server"});
    }
}

export const getVacationRequestPDF = async (req, res) => {
    try {
        const body = req.body;

        if(!body.period || !body.name || !body.adscriptionArea || !body.position || !body.areaDirector || !body.directorPosition || !body.signaturesBreak || !body.activities) {
            console.log(body)
            res.status(404).json({msg: "Information incomplete"});
            return;
        }

        const def = generateReport(body);

        const pdfDoc = await printerPDF.createPdfKitDocument(def);

        res.setHeader('Content-Type', 'application/pdf');
        pdfDoc.info.Title = "Reporte de Actividades";
        pdfDoc.pipe(res);
        pdfDoc.end();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error on server"});
    }
}

export const getMaterialRequestPDF = async (req, res) => {
    try {
        const body = req.body;

        if(!body.period || !body.name || !body.adscriptionArea || !body.position || !body.areaDirector || !body.directorPosition || !body.signaturesBreak || !body.activities) {
            console.log(body)
            res.status(404).json({msg: "Information incomplete"});
            return;
        }

        const def = generateReport(body);

        const pdfDoc = await printerPDF.createPdfKitDocument(def);

        res.setHeader('Content-Type', 'application/pdf');
        pdfDoc.info.Title = "Reporte de Actividades";
        pdfDoc.pipe(res);
        pdfDoc.end();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error on server"});
    }
}

export const testPDF = async (req, res) => {
    try {
        const def = generatePDF();

        const pdfDoc = await printerPDF.createPdfKitDocument(def);

        res.setHeader('Content-Type', 'application/pdf');
        pdfDoc.info.Title = "Test File";
        pdfDoc.pipe(res);
        pdfDoc.end();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error on server"});
    }
}