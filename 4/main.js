const BatchFile = require('./batch-file.js');


const batchFileArr = makeArrFromStr(BatchFile.data);
const batchFileObjArr = makeObjArr(batchFileArr);

console.log(batchFileObjArr);


function makeArrFromStr (str) {
  return str.split(/\n\s*\n/);
}

function makeObjArr (arr) {
  return arr.map(element => {
    let obj = {
      byr: null,
      iyr: null,
      eyr: null,
      hgt: null,
      hcl: null,
      ecl: null,
      pid: null,
      cid: null,
    }

    

    return obj;
  });
}