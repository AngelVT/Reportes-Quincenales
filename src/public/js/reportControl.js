const periodSelect = document.getElementById('periods');
const monthSelect = document.getElementById('months');
const periodInput = document.getElementById('period');
const dateContainer = document.getElementById('dates');
const dateBtn = document.getElementById('btn_date');
const activityInput = document.querySelector('#editor_textarea');
const yearInput = document.getElementById('year');
const form = document.getElementById('controls');

const pdfPanel = document.querySelector('#panel');
const pdfPanelClose = document.querySelector('#panel_close');

const loader = document.getElementById('loader');

var constYear = new Date().getFullYear();

yearInput.value = constYear;

var dates = new Array();
var activities = new Array();
var modifiedTarget;

periodSelect.addEventListener(
    'change', () => {
        periodInput.value = setPeriod(parseInt(periodSelect.value), parseInt(monthSelect.value), constYear);
        generateDateSquares(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)), dateContainer);
        dates = Array.from(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)));
        activities.length = dates.length;
    }
);

monthSelect.addEventListener(
    'change', () => {
        periodInput.value = setPeriod(parseInt(periodSelect.value), parseInt(monthSelect.value), constYear);
        generateDateSquares(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)), dateContainer);
        dates = Array.from(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)));
        activities.length = dates.length;
    }
);

dateBtn.addEventListener(
    'click', () => {
        periodInput.value = setPeriod(parseInt(periodSelect.value), parseInt(monthSelect.value), constYear);
        generateDateSquares(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)), dateContainer);
        dates = Array.from(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)));
        activities.length = dates.length;
    }
);

yearInput.addEventListener(
    'change', () => {
        constYear = yearInput.value;
        periodInput.value = setPeriod(parseInt(periodSelect.value), parseInt(monthSelect.value), constYear);
        generateDateSquares(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)), dateContainer);
        dates = Array.from(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)));
        activities.length = dates.length;
    }
);

yearInput.addEventListener(
    'input', () => {
        constYear = yearInput.value;
        periodInput.value = setPeriod(parseInt(periodSelect.value), parseInt(monthSelect.value), constYear);
        generateDateSquares(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)), dateContainer);
        dates = Array.from(getWeekdaysInPeriod(constYear, parseInt(monthSelect.value), parseInt(periodSelect.value)));
        activities.length = dates.length;
    }
);

form.addEventListener(
    'submit', event => {
        event.preventDefault();

        const formData = new FormData(form);

        let data = Object.fromEntries(formData);

        data.activities = generateDateActivities();

        getPDF(data);
    }
);

pdfPanelClose.addEventListener(
    'click', () => {
        pdfPanel.classList.add('dis-none');
    }
);

async function getPDF(body) {
    loader.classList.remove('dis-none');

    const response = await fetch('/app/activityReportPDF', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const pdfFrame = document.getElementById('pdfFrame');
        pdfFrame.src = url;
        pdfFrame.style.display = 'block';

        pdfPanel.classList.remove('dis-none');
    } else {
        let res = await response.json();
        alert(res.msg);
        console.error('Error generating PDF:', response.statusText);
    }
    loader.classList.add('dis-none');
}

activityInput.addEventListener(
    'input', () => {
        let activityList = activityInput.value;
        activities[modifiedTarget] = activityList.split('\n');
    }
);

function getDaysInMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

function setPeriod(period, month, year) {
    const months = [
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

    if (period == 1) {
        return `Del 1 al 15 de ${months[month]} del ${year}`
    }

    return `Del 16 al ${getDaysInMonth(year, month)} de ${months[month]} del ${year}`
}

function getWeekdaysInPeriod(year, month, period) {
    let startDate, endDate;

    if (period == 1) {
        startDate = new Date(year, month, 1);
        endDate = new Date(year, month, 15);
    } else if (period == 2) {
        startDate = new Date(year, month, 16);
        endDate = new Date(year, month + 1, 0);
    }
    const weekdays = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            weekdays.push(new Date(currentDate).toISOString());
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return weekdays.map(d => {
        return d.split('T')[0];
    });
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
    return `${date[2]} de ${months[parseInt(date[1]) - 1]} del ${date[0]}`;
}

function generateDateSquares(dateArray, target) {
    target.innerHTML = '';

    for (const [index, date] of dateArray.entries()) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let input = document.createElement('input')

        div.setAttribute('class', 'dateSquare bg-complementary padding-small color-white txt-center');
        div.setAttribute('onclick', `selectDate(${index}, this)`)
        div.style.marginBottom = '5px';

        input.setAttribute('type', 'hidden');
        input.setAttribute('id', `date_input_${index}`);

        p.innerText = dateFormatFull(date);

        div.appendChild(input)
        div.appendChild(p);

        target.appendChild(div);
    }
}

function selectDate(targetDate, square) {
    document.querySelectorAll('.dateSquare').forEach(e => {
        e.classList.remove('squareSelected')
    });
    square.classList.add('squareSelected');
    modifiedTarget = parseInt(targetDate);
    document.querySelector('#editor_textarea').value = activities[modifiedTarget] ? activities[modifiedTarget].join('\n') : '';
    document.querySelector('#editor_textarea').focus();
}

function generateDateActivities() {
    let arr = new Array();
    
    dates.forEach( (e, i) => {
        arr.push({
            date: e,
            activities: activities[i] ? activities[i] : ['']
        })
    });

    return arr;
}