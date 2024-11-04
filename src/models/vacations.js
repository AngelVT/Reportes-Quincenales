import * as docUtils from "../models/docUtils/utils.js";
import { __dirname } from "../paths.js";
import path from 'path';

export function generatePDF() {
    var definition = {
        pageMargins: [ 40, 40, 40, 40 ],
        styles: docUtils.docStyles,
        pageOrientation: 'portrait',
        content: [
            {
                columnGap: 5,
                columns: [
                    {
                        width: '*',
                        stack: [
                            {
                                image: path.join(__dirname, 'public', 'img', 'imduyv_logo_nuevo.png'),
                                alignment: 'left',
                                width: 150,
                                margin: [0, 0, 0, 0]
                            }
                        ]
                    },
                    {
                        width: '*',
                        stack: [
                            {
                                image: path.join(__dirname, 'public', 'img', 'logo_tizayuca.png'),
                                alignment: 'right',
                                width: 100,
                                margin: [0, 0, 0, 0]
                            }
                        ]
                        
                    }
                ]
            },
            {
                text: 'INSTITUTO MUNICIPAL DE DESARROLLO URBANO Y VIVIENDA',
                bold: true,
                alignment: 'center',
                margin: [0, 25, 0, 0]
            },
            {
                text: 'Solicitud de vacaciones',
                bold: true,
                alignment: 'center',
                fontSize: 10,
                margin: [0, 25, 0, 0]
            },
            {
                margin: [0, 25, 0, 0],
                table: {
                    widths: [25,'*','*','*','auto','*'],
                    body: [
                        [
                            {text: "DATOS DEL EMPLEADO", style: 'headT', border: docUtils.borderless, colSpan: 6},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ],
                        [
                            {text: 'Nombre:', fontSize: 8, colSpan: 2},
                            {},
                            {text: 'Angel Velazquez Garcia', fontSize: 8, alignment: 'center', colSpan: 2},
                            {},
                            {text: 'Fecha de solicitud:', fontSize: 8},
                            {text: '17/10/2024', fontSize: 8, alignment: 'center'},
                        ],
                        [
                            {text: 'Dirección a la que pertenece:', fontSize: 8, colSpan: 2},
                            {},
                            {text: 'Investigación y Planeación Estratégica', fontSize: 8, alignment: 'center', colSpan: 2},
                            {},
                            {text: 'Numero de Trabajador:', fontSize: 8},
                            {text: '106', fontSize: 8, alignment: 'center'},
                        ],
                        [
                            {text: 'Cargo:', fontSize: 8, colSpan: 2},
                            {},
                            {text: 'Geoinformatico', fontSize: 8, alignment: 'center', colSpan: 2},
                            {},
                            {text: [{text: "X", bold: true}, {text: "   Confianza"}], fontSize: 8},
                            {text: [{text: "X", bold: true}, {text: "   Base"}], fontSize: 8},
                        ]
                    ]
                }
            },
            {
                margin: [0, 25, 0, 0],
                table: {
                    widths: ['*','*','*','*','*','*'],
                    body: [
                        [
                            {text: "DATOS DEL EMPLEADO", style: 'headT', border: docUtils.borderless, colSpan: 6},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ],
                        [
                            {text: 'Año: ', fontSize: 8},
                            {text: '2024', fontSize: 8, alignment: 'center'},
                            {text: 'Primer periodo:', fontSize: 8},
                            {text: 'X', fontSize: 8, alignment: 'center', bold: true},
                            {text: 'Segundo periodo:', fontSize: 8, alignment: 'center'},
                            {text: 'X', fontSize: 8, alignment: 'center', bold: true},
                        ],
                        [
                            {text: 'Numero de días del periodo:', fontSize: 8, colSpan: 2},
                            {},
                            {text: '4', fontSize: 8, alignment: 'center'},
                            {text: 'Numero de días a disfrutar:', fontSize: 8, colSpan: 2},
                            {},
                            {text: '1', fontSize: 8, alignment: 'center'},
                        ],
                        [
                            {text: 'Días pendientes:', fontSize: 8},
                            {text: '3', fontSize: 8, alignment: 'center'},
                            {text: 'Fecha de Inicio:', fontSize: 8},
                            {text: '08/11/2024', fontSize: 8, alignment: 'center'},
                            {text: 'Fecha de Termino:', fontSize: 8},
                            {text: '08/11/2024', fontSize: 8, alignment: 'center'},
                        ],
                        [
                            {text: 'Fecha de Reanudación de actividades:', fontSize: 8 ,colSpan: 3},
                            {},
                            {},
                            {text: '11/11/2024', fontSize: 8, alignment: 'center', colSpan: 3, bold: true},
                            {},
                            {},
                        ]
                    ]
                }
            },
            {
                text: ['Mientras me encuentre ausente me reemplazara en mis funciones el/ la :   C. ', 'someone'],
                alignment: 'left',
                fontSize: 8,
                margin: [0, 25, 0, 0]
            },
            {
                margin: [0, 25, 0, 0],
                table: {
                    widths: ['*','*','*','*'],
                    body: [
                        [
                            {text: "DATOS DEL EMPLEADO", style: 'headT', border: docUtils.borderless},
                            {text: "AUTORIZADO", style: 'headT', border: docUtils.borderless},
                            {text: "ENTERADO", style: 'headT', border: docUtils.borderless},
                            {text: "VO.BO.", style: 'headT', border: docUtils.borderless},
                        ],
                        [
                            {text: "", margin: [0, 50, 0, 0]},
                            {text: "", margin: [0, 50, 0, 0]},
                            {text: "", margin: [0, 50, 0, 0]},
                            {text: "", margin: [0, 50, 0, 0]},
                        ],
                        [
                            {text: "ING. ANGEL VELÁZQUEZ GARCÍA", fontSize: 8, alignment: 'center'},
                            {text: "ING. ROMÁN IGNACIO MARTÍNEZ DOMÍNGUEZ", fontSize: 8, alignment: 'center'},
                            {text: "L.C. DANIEL MANZANO NIETO ", fontSize: 8, alignment: 'center'},
                            {text: " M.A.C.I.G. HIPÓLITO ZAMORA SORIA", fontSize: 8, alignment: 'center'},
                        ],
                        [
                            {text: "GEOINFORMATICO", fontSize: 8, alignment: 'center'},
                            {text: "DIRECTOR DE INVESTIGACIÓN Y PLANEACIÓN ESTRATÉGICA", fontSize: 8, alignment: 'center'},
                            {text: "DIRECTOR DE FINANZAS", fontSize: 8, alignment: 'center'},
                            {text: "DIRECTOR GENERAL", fontSize: 8, alignment: 'center'},
                        ],
                    ]
                }
            },
            {
                margin: [0, 25, 0, 0],
                fontSize: 8,
                stack: [
                    {text: 'Original  Recursos Humanos'},
                    {text: 'c.c.p. Jefe Inmediato'}
                ]
            },
            {
                margin: [0, 75, 0, 0],
                text: 'Calle Lázaro Cárdenas No. 101\nColonia El Pedregal, Tizayuca, Hidalgo. C.P. 43802',
                alignment: 'center',
                fontSize: 9
            }
        ]
    }

    return definition;
}