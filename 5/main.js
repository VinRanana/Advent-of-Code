const BoardingPasses = require('./boarding-passes.js');



// Split into array of individual passes.
const boardingPassesArray = BoardingPasses.data.split('\n')

// Turn each pass into binary numbers
const binaryArray = boardingPassesToBinary(boardingPassesArray);

// Determine highest binary number
const highestBinary = findHighestBinary(binaryArray);
const seatId = convertBinaryToNum(highestBinary, 0, 0);

// Log the result
console.log(seatId);



function boardingPassesToBinary (arr) {
  return arr.map( element => singlePassToBinary(element) );
}

function singlePassToBinary (str) {
  let result = '';

  for (let i = 0; i < 10; i++) {
    const letter = str[i];
    if (letter === 'B' || letter === 'R') result += '1';
    else result += '0';
  }

  return Number(result);
}

function findHighestBinary (arr) {
  return arr.reduce((acc, cur) => cur > acc ? cur : acc);
}

function convertBinaryToNum (num, order, total) {
  if (num % 10) total += 2 ** order;

  num = Math.floor(num / 10);
  order++;
  
  return num ? convertBinaryToNum(num, order, total) : total;
}