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
                text: 'INSTITUTO MUNICIPAL DE DESARROLLO URBANO Y VIVIENDA',
                bold: true,
                alignment: 'center',
                fontSize: 10,
                margin: [0, 0, 0, 10]
            },
            {
                columnGap: 5,
                columns: [
                    {
                        width: 125,
                        stack: [
                            {
                                image: path.join(__dirname, 'public', 'img', 'logo_tizayuca.png'),
                                alignment: 'left',
                                width: 125,
                                margin: [0, 0, 0, 0]
                            }
                        ]
                    },
                    {
                        width: '*',
                        stack: [
                            {
                                text: 'ADMINISTRACIÓN 2020-2024',
                                alignment: 'center',
                                bold: true,
                                fontSize: 10
                            },
                            {
                                text: '\nREQUISICIÓN DE MATERIALES Y/O SERVICIOS',
                                alignment: 'center',
                                bold: true,
                                fontSize: 10
                            }
                        ]
                    },
                    {
                        width: 125,
                        stack: [
                            {
                                image: path.join(__dirname, 'public', 'img', 'imduyv_logo_nuevo.png'),
                                alignment: 'right',
                                width: 125,
                                margin: [0, 0, 0, 0]
                            }
                        ]
                        
                    }
                ]
            },
            {
                margin: [0, 25, 0, 0],
                table: {
                    widths: [25,'*','*','*','*', 'auto','*'],
                    body: [
                        [
                            {text: 'Nombre del solicitante:', fontSize: 8, colSpan: 2, bold: true, border: docUtils.borderless},
                            {},
                            {text: 'Angel Velazquez Garcia', fontSize: 8, alignment: 'center', colSpan: 3, border: [false, false, false, true]},
                            {},
                            {},
                            {text: '',border: docUtils.borderless},
                            {text: 'Folio', fontSize: 8, alignment: 'center', bold: true, border: [false, true, false, false]},
                        ],
                        [
                            {text: 'Departamento solicitante:', fontSize: 8, colSpan: 2, bold: true, border: docUtils.borderless},
                            {},
                            {text: 'Investigación y Planeación Estratégica', fontSize: 8, alignment: 'center', colSpan: 3, border: [false, false, false, true]},
                            {},
                            {},
                            {text: '',border: docUtils.borderless},
                            {text: '17/10/2024', fontSize: 8, alignment: 'center', border: docUtils.borderless},
                        ],
                        [
                            {text: 'Uso del bien solicitado:', fontSize: 8, colSpan: 2, bold: true, border: docUtils.borderless},
                            {},
                            {text: 'Geoinformatico', fontSize: 8, alignment: 'center', colSpan: 3, border: [false, false, false, true]},
                            {},
                            {},
                            {text: '',border: docUtils.borderless},
                            {text: 'Fecha', alignment: 'center', fontSize: 8, bold: true, border: [false, true, false, false]},
                        ]
                    ]
                }
            },
            {
                margin: [0, 25, 0, 0],
                table: {
                    widths: ['auto','*','auto'],
                    body: [
                        [
                            {text: 'CANTIDAD SOLICITADA', fontSize: 8, alignment: 'center', bold: true},
                            {text: 'DESCRIPCIÓN DEL BIEN O SERVICIO', fontSize: 8, alignment: 'center', bold: true},
                            {text: 'OBSERVACIONES', fontSize: 8, alignment: 'center', bold: true}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ],
                        [
                            {text: ' '},
                            {text: ' '},
                            {text: ' '}
                        ]
                    ]
                }
            },
            {
                margin: [0, 0, 0, 0],
                table: {
                    widths: ['*','*','*'],
                    body: [
                        [
                            {text: "NOMBRE Y FIRMA DEL SOLICITANTE", fontSize: 8, alignment: 'center', bold: true, border: [true, false, true, true]},
                            {text: "REVISÓ", fontSize: 8, alignment: 'center', bold: true, border: [true, false, true, true]},
                            {text: "AUTORIZÓ", fontSize: 8, alignment: 'center', bold: true, border: [true, false, true, true]},
                        ],
                        [
                            {text: "\n\n\n"},
                            {text: "\n\n\n"},
                            {text: "\n\n\n"},
                        ],
                        [
                            {text: "ING. ANGEL VELÁZQUEZ GARCÍA", fontSize: 8, alignment: 'center', bold: true},
                            {text: "ING. ROMÁN IGNACIO MARTÍNEZ DOMÍNGUEZ", fontSize: 8, alignment: 'center', bold: true},
                            {text: "L.C. DANIEL MANZANO NIETO ", fontSize: 8, alignment: 'center', bold: true}
                        ],
                        [
                            {text: "GEOINFORMATICO", fontSize: 8, alignment: 'center', bold: true},
                            {text: "DIRECTOR DE INVESTIGACIÓN Y PLANEACIÓN ESTRATÉGICA", fontSize: 8, alignment: 'center', bold: true},
                            {text: "DIRECTOR DE FINANZAS", fontSize: 8, alignment: 'center', bold: true},
                        ],
                    ]
                }
            }
        ]
    }

    return definition;
}