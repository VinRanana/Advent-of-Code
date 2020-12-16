
const input = {
  15: 1, 
  5: 2,
  1: 3,
  4: 4,
  7: 5 
};




let result = playGame(input, 30000000);

console.log( result );
// 6x faster than first solution, but still 10x too slow
// Replace obj with map




function playGame (input, end) {
  let spoken = 6;
  let lastNum = 0;

  if ( !input.hasOwnProperty(`${lastNum}`) ) {
    input[`${lastNum}`] = spoken;
  }

  while ( spoken < end ) {
    let newNum = spoken - input[`${lastNum}`];
    
    input[`${lastNum}`] = spoken;
    lastNum = JSON.parse( JSON.stringify(newNum) );
    spoken++;

    if ( !input.hasOwnProperty(`${lastNum}`) ) {
      input[`${lastNum}`] = spoken;
    }
  }

  return lastNum;
}
