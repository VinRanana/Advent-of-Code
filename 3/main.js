const SlopeMap = require('./slope_map.js');

function makeSlopeArray (str) {
  return str.split('\n');
}

function locationIsATreeBool (arr, index, right, down) {
  const str = arr[index];

  let position = right * ( index / down ) + 1;
  position = (position % str.length);
  if (position === 0) position = str.length; 
  
  return ( str[position - 1] === '#' );
}

function howManyTrees (arr, right, down) {
  let numOfTrees = 0;

  for (let i = 1; i < arr.length; i = i + down) {
    if ( locationIsATreeBool(arr, i, right, down) ) numOfTrees++;
  }

  return numOfTrees;
}

function multiply () {
  let product = 1;

  for (const arg in arguments) {
    if (arguments.hasOwnProperty(arg)) {
      product *= arguments[arg];
    }
  }

  return product;
}


const slopeArray = makeSlopeArray(SlopeMap.data);
const slopeRoutes = [
  howManyTrees(slopeArray, 1, 1),
  howManyTrees(slopeArray, 3, 1),
  howManyTrees(slopeArray, 5, 1),
  howManyTrees(slopeArray, 7, 1),
  howManyTrees(slopeArray, 1, 2),
];
const result = multiply(...slopeRoutes);


console.log(slopeRoutes);