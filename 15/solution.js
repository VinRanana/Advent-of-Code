
const input = [15,5,1,4,7,0];




let result = playGame(input, 30000000);

console.log( result );




function playGame (input, end) {
  const endMinusOne = end - 1;

  while ( input.length < endMinusOne ) {
    input.push( nextNumber(input) );
  }

  return nextNumber(input);
}

function nextNumber (numArray) {
  const arrLength = numArray.length;
  const lastNum = numArray[arrLength - 1];
  const lastOccurence = findLastOccurence(numArray, arrLength, lastNum);

  return (arrLength - 1) - lastOccurence;
}

function findLastOccurence (numArray, arrLength, lastNum) {
  for (let i = arrLength - 2; i >= 0; i--) {
    if (numArray[i] === lastNum) return i;
  }

  return arrLength - 1;
}