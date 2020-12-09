const Numbers = require('./input.js');

const availableNums = Numbers.data
  .split('\n')
  .slice(0, 25)
  .map( el => Number(el) );

const numList = Numbers.data
  .split('\n')
  .slice(25)
  .map( el => Number(el) );



for (let i = 0; i < numList.length; i++) {
  const currentNum = numList[i];
  
  if (isNumValid(currentNum)) {
    availableNums.shift();
    availableNums.push(currentNum);
  } else {
    console.log(currentNum);
    break;
  }
}
  


function isNumValid (num) {
  const checkedNums = [];

  for (const el of availableNums) {
    const difference = num - el;

    if (checkedNums.includes(difference) && el != difference) return true;
    else checkedNums.push(el);
  }

  return false;
}