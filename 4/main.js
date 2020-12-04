const BatchFile = require('./batch-file.js');
const requiredFields = 
  ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];


let batchArray = makeArrFromStr(BatchFile.data);
numOfValidPassports = countValidPassports(batchArray);

console.log(numOfValidPassports);


function makeArrFromStr (str) {
  return str.split(/\n\s*\n/);
}

function countValidPassports (arr) {
  const reducer = (acc, cur) => {
    if (isPassportValidBool(cur)) return acc + 1;
    else return acc;
  };

  return arr.reduce(reducer, 0);
}

function isPassportValidBool (passport) {
  const reducer = (acc, cur) => {
    if (checkFieldInBatch(cur, passport)) {
      return acc + 1;
    }
    else return acc;
  };

  const numOfReqFields = requiredFields.reduce(reducer, 0);

  if (numOfReqFields === requiredFields.length) return true;
  else return false
}

function checkFieldInBatch (field, batch) {
  let fieldRegex = new RegExp(`\s${field}:`);

  if (fieldRegex.test(batch)) return true;
  else return false;
}