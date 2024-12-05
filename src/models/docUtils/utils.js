export const borderless = [false, false, false, false];

export const formLayout = {
    paddingLeft: function (i, node) { return 1; },
    paddingRight: function (i, node) { return 1; },
    paddingTop: function (i, node) { return 1; },
    paddingBottom: function (i, node) { return 1; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const containerLayout = {
    paddingLeft: function (i, node) { return 2; },
    paddingRight: function (i, node) { return 2; },
    paddingTop: function (i, node) { return 2; },
    paddingBottom: function (i, node) { return 2; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const noBorderNoPadding = {
    paddingLeft: function (i, node) { return 0; },
    paddingRight: function (i, node) { return 0; },
    paddingTop: function (i, node) { return 0; },
    paddingBottom: function (i, node) { return 0; },
    hLineWidth: function (i, node) { return 0; },
    vLineWidth: function (i, node) { return 0; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const NoPadding = {
    paddingLeft: function (i, node) { return 0; },
    paddingRight: function (i, node) { return 0; },
    paddingTop: function (i, node) { return 0; },
    paddingBottom: function (i, node) { return 0; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const subTable = {
    paddingLeft: function (i, node) { return 0; },
    paddingRight: function (i, node) { return 0; },
    paddingTop: function (i, node) { return 0; },
    paddingBottom: function (i, node) { return 0; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#757575'; },
    vLineColor: function (i, node) { return '#757575'; }
}

export const cellLayout = {
    paddingLeft: function (i, node) { return 2; },
    paddingRight: function (i, node) { return 2; },
    paddingTop: function (i, node) { return 1; },
    paddingBottom: function (i, node) { return 1; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const docStyles = {
    headT: {
        color: 'white',
        fillColor: '#920000',
        fontSize: 7,
        bold: true,
        alignment: 'center',
    },
    headTB: {
        color: 'white',
        fillColor: '#757575',
        fontSize: 7,
        bold: true,
        alignment: 'center',
    },
    labelT: {
        fontSize: 7,
        bold: true
    },
    labelTC: {
        fontSize: 7,
        bold: true,
        alignment: 'center'
    },
    boldCenter: {
        bold: true,
        alignment: 'center'
    },
    center: {
        alignment: 'center'
    },
    justify: {
        alignment: 'justify'
    },
    formRow: {
        margin: [0, 0, 0, 5]
    },
    regular: {
        fontSize: 8
    },
    regularSmall: {
        fontSize: 5
    },
    headST: {
        color: '#fff',
        fillColor: '#757575',
        fontSize: 5,
        alignment: 'center',
    }
}

function dateFormatFull(dateNumeric) {
    let months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril", 
        "Mayo", 
        "Junio", 
        "Julio", 
        "Agosto", 
        "Septiembre", 
        "Octubre", 
        "Noviembre", 
        "Diciembre"];
    let date = dateNumeric.split('-');
    return `${date[2]} de ${months[parseInt(date[1])-1]} del ${date[0]}`;
}

export function generatetableBody(data) {
    let tableBody = [
        [
            {text: 'FECHA', style: 'labelTC'},
            {text: 'ACTIVIDADES', style: 'labelTC'},
            {text: 'OBSERVACIONES', style: 'labelTC'},
            {text: 'INCIDENCIAS', style: 'labelTC'}
        ]
    ];

    for(const activity of data.activities) {
        let activityRow = [
            {text: dateFormatFull(activity.date), style: 'labelTC'},
            {ul: activity.activities, style: 'regular'},
            {},
            {}
        ]
        tableBody.push(activityRow);
    }

    tableBody.push([
        {pageBreak: parseInt(data.signaturesBreak) == 1 ? 'before' : 'avoid', text: 'ELABORÓ', style: 'labelTC'},
        {pageBreak: parseInt(data.signaturesBreak) == 1 ? 'before' : 'avoid', text: 'REVISÓ', style: 'labelTC'},
        {pageBreak: parseInt(data.signaturesBreak) == 1 ? 'before' : 'avoid', colSpan: 2, text: 'AUTORIZÓ', style: 'labelTC'},
        {}
    ]);

    tableBody.push([
        {text: data.name, style: 'labelTC', margin: [0,25,0,5]},
        {text: 'L.D. Estefhani Itzel Rodriguez Barrera', style: 'labelTC', margin: [0,25,0,5]},
        {colSpan: 2,text: data.areaDirector, style: 'labelTC', margin: [0,25,0,5]},
        {}
    ]);

    tableBody.push([
        {margin: [0,5,0,2], text: data.position, style: 'labelTC'},
        {margin: [0,5,0,2], text: 'Titular del Órgano Interno de Control', style: 'labelTC'},
        {margin: [0,5,0,2], colSpan: 2,text: data.directorPosition, style: 'labelTC', },
        {}
    ]);

    return tableBody;
}

export const dataExample = {
    "administrativeUnit": "Direccion de Investigacion y Planeacion Estrategica",
    "name": "Ing. Angel Velazquez Garcia",
    "adscriptionArea": "Departamanto de Investigacion y Analisis",
    "position": "Geoinformatico",
    "period": "Del 1 al 15 de septiembre del 2024",
    "signaturesBreak": "0",
    "areaDirector": "Ing. Román Ignacio Martínez Domínguez",
    "directorPosition": "Director de Investigación y Planeación Estratégica",
    "activities": [
        {
            "date": "2024-09-01",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-02",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-03",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-04",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-05",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-06",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-07",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-08",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-09",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-10",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-11",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-12",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-13",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-14",
            "activities": ["a", "b"]
        },
        {
            "date": "2024-09-15",
            "activities": ["a", "b"]
        },

    ]
}