const xlsx = require ('xlsx');
const path = require ('path');
const filePath = path.join(__dirname, 'xlsample.xlsx');

function calculateAverage () { 
const workbook = xlsx.readFile(filePath);
const sheetname = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetname];
const data = xlsx.utils.sheet_to_json(worksheet);
if (data.length === 0) {
    console.log('הקובץ ריק');
    return;
}
let totalScore = 0;
    let count = 0;
    data.forEach (row=> {
        if (row ['ציון']) {
            totalScore += row ['ציון'];
            count++;
        }
    });
    const average = totalScore / count; 
    console.log(`The average is: ${average}`);
}
calculateAverage();
