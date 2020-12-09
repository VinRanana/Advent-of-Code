const Numbers = require('./input.js');

let availableNums = Numbers.data
  .split('\n')
  .slice(0, 25)
  .map( el => Number(el) );


console.log(availableNums);



function isNumValid (num) {
  let checkedNums = [];

  for (const el of availableNums) {
    const difference = num - el;

    if (checkedNums.includes(difference) && el != difference) return true;
    else checkedNums.push(el);
  }

  return false;
}