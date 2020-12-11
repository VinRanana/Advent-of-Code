const SeatLayout = require('./input.js');
const SeatLayoutObj = require('./input.js');

const seatLayout = SeatLayoutObj.data
  .split('\n')
  .map( el => el.split('') );


  
console.log(seatLayout);
