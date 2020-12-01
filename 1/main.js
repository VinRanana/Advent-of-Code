const Report = require('./expense_report.js');

function convertReportToArray (expenseReport) {
  return expenseReport.split('\n');
}

function convertArrElementsToNums (reportArray) {
  return reportArray.map(element => +element);
}

function findTwoEntries (numberArray) { // find the two entries that add up to 2020
  let arrayLength = numberArray.length;

  for (let i = 0; i < arrayLength; i++) {
    const firstNumber = numberArray[i]
    const secondNumber = 2020 - firstNumber;

    for (let j = i + 1; j < arrayLength; j++) {
      if (numberArray[j] === secondNumber) return [firstNumber, secondNumber];
    }
  }
}

function multiply ([a, b]) {
  return a * b;
}

let result = convertReportToArray(Report.data);
result = convertArrElementsToNums(result);
result = findTwoEntries(result);
result = multiply(result);

console.log( result );