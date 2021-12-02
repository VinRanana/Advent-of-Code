const BatchFile = require('./batch-file.js');
const requiredFields = 
  ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  

const batchArray = makeArrFromStr(BatchFile.data);
numOfValidPassports = countValidPassports(batchArray);

console.log(numOfValidPassports);



function makeArrFromStr (str) {
  return str.split(/\n\s*\n/);
}

function countValidPassports (arr) {
  const reducer = (acc, cur) => {
    return isPassportValidBool(cur) ? acc + 1 : acc;
  };

  return arr.reduce(reducer, 0);
}

function isPassportValidBool (passport) {
  const reducer = (acc, cur) => {
    if (checkFieldInBatch(cur, passport)) return acc + 1;
    else return acc;
  };

  const numOfReqFields = requiredFields.reduce(reducer, 0);

  return numOfReqFields === requiredFields.length ? true : false;
}

function checkFieldInBatch (field, batch) {
  const fieldRegex = new RegExp(field + ':');

  return fieldRegex.test(batch) ? true : false;
}