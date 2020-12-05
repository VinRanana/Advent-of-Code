const BoardingPasses = require('./boarding-passes.js');

// Split into array of individual passes.
const boardingPassesArray = BoardingPasses.data.split('\n')

// Turn each pass into binary numbers
const binaryArray = boardingPassesToBinary(boardingPassesArray);

// Determine highest binary number
const binaryNumArray = strArrToNumberArr(binaryArray);

const highestBinary = findHighestBinary(binaryNumArray);

const seatId = convertBinaryToNum(highestBinary, 0, 0);

function boardingPassesToBinary (arr) {
  return arr.map( element => singlePassToBinary(element) );
}

function singlePassToBinary (str) {
  let result = '';

  for (let i = 0; i < 10; i++) {
    const letter = str[i];
    if (letter === 'F' || letter === 'L') result += '1';
    else result += '0';
  }

  return result;
}

function strArrToNumberArr (arr) {
  return arr.map(element => Number(element));
}

function findHighestBinary (arr) {
  return arr.reduce((acc, cur) => {
    if (cur > acc) return cur;
    else return acc;
  });
}

function convertBinaryToNum (num, order, total) {
  if (!num) return total;

  if (num % 10) total += 2 ** order;

  num = Math.floor(num / 10);
  order++;
  
  convertBinaryToNum(num, order, total);
}

console.log(seatId);