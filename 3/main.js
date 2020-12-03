const SlopeMap = require('./slope_map.js');
const right = 3;
const down = 1;

function makeSlopeArray (str) {
  return str.split('\n');
}

function locationIsATreeBool (arr, index) {
  const str = arr[index];

  let position = right * ( index / down ) + 1;
  position = (position % str.length);
  if (position === 0) position = str.length; 
  
  return ( str[position - 1] === '#' );
}

function howManyTrees (arr) {
  let numOfTrees = 0;

  for (let i = 1; i < arr.length; i++) {
    if ( locationIsATreeBool(arr, i) ) numOfTrees++;
  }

  return numOfTrees;
}


let result = makeSlopeArray(SlopeMap.data);
result = howManyTrees(result);

console.log(result);