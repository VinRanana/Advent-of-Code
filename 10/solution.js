const AdaptersString = require('./input.js');

const adaptersArray = AdaptersString.data
  .split('\n')
  .map(el => Number(el))
  .sort((a, b) => a - b);

let joltDifferences = {
  1: 0,
  2: 0,
  3: 1
};



joltDifferences = countDifferences(joltDifferences, adaptersArray);

result = multiplyDifferences(joltDifferences, [1, 3]);

console.log(result);



function countDifferences (differencesObj, adaptersArr) {
  for (let i = 0, previous = 0; i < adaptersArr.length; i++) {
    const adapter = adaptersArr[i];
    const difference = adapter - previous;
    differencesObj[`${difference}`]++;
    previous = adapter;
  }

  return differencesObj
}

function multiplyDifferences (differencesObj, differencesArr) {
  let product = 1;

  for (const jolt of differencesArr) {
    product *= differencesObj[`${jolt}`];
  }

  return product;
}