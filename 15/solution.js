
const inputMap = new Map();

inputMap.set(15, 1);
inputMap.set(5, 2);
inputMap.set(1, 3);
inputMap.set(4, 4);
inputMap.set(7, 5);




let result = playGame(inputMap, 30000000);
console.log(result);




function playGame (inputMap, end) {
  let spoken = 6;
  let lastNum = 0;

  while ( spoken < end ) {
    if ( !inputMap.has(lastNum) ) inputMap.set(lastNum, spoken);

    const newNum = spoken - inputMap.get(lastNum);
    
    inputMap.set(lastNum, spoken);

    lastNum = newNum.valueOf();
    spoken++;
  }

  return lastNum;
}
