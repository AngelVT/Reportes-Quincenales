import path from "path"
import { __dirname } from "../paths.js";
import { printerPDF } from "../lib/configPDF.js";
import { generateReport } from "../models/report.js";
import { generatePDF } from "../models/vacations.js";
import { dataExample } from "../models/docUtils/utils.js";

export const goEditor = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'editor.html'));
    } catch (error) {
        res.status(500).json({msg: "Error on server"});
    }
}

export const getPDF = async (req, res) => {
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