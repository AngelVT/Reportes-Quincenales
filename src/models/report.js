import * as docUtils from "../models/docUtils/utils.js";
import { __dirname } from "../paths.js";
import path from 'path';

export function generateReport(data) {
    var definition = {
        pageMargins: [ 40, 40, 40, 40 ],
        styles: docUtils.docStyles,
        pageOrientation: 'landscape',
        content: [
            {
                image: path.join(__dirname, 'public', 'img', 'imduyv_logo_nuevo.png'),
                width: 150,
                alignment: 'left',
                margin: [0, 0, 0, 0]
            },
            {
                columns: [
                    {
                        style: 'regular',
                        margin: [0,0,0,2],
                        stack: [
                            {
                                text: [
                                    {text: 'UNIDAD ADMINISTRATIVA: '},
                                    {text: data.administrativeUnit, bold: true}
                                ]
                            },
                            {
                                text: [
                                    {text: 'NOMBRE DEL SERVIDOR PÚBLICO: '},
                                    {text: data.name, bold: true}
                                ]
                            },
                            {
                                text: [
                                    {text: 'ÁREA DE ADSCRIPCIÓN: '},
                                    {text: data.adscriptionArea, bold: true}
                                ]
                            },
                            {
                                text: [
                                    {text: 'CARGO: '},
                                    {text: data.position, bold: true}
                                ]
                            },
                            {
                                text: [
                                    {text: 'PERIODO: '},
                                    {text: data.period, bold: true}
                                ]
                            }
                        ]
                    },
                    {
                        image: path.join(__dirname, 'public', 'img', 'logo_tizayuca.png'),
                        width: 100,
                        alignment: 'right',
                        margin: [0, 0, 0, 0]
                    }
                ]
            },
            {
                table: {
                    widths: [150, '*', 100, 100],
                    body: docUtils.generatetableBody(data)
                },
                layout: docUtils.cellLayout
            }
        ]
    }

    return definition;
}