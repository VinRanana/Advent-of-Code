const SeatLayoutObj = require('./test-input');

const emptiedLayout = SeatLayoutObj.data
  .split('\n')
  .map( el => el.split('') );

const occupiedLayout = emptiedLayout.map(el => el);



occupyRow(emptiedLayout, 1);

console.log(occupiedLayout);



function occupyRow (outerArr, rowIndex) {
  outerArr[rowIndex].forEach((seat, i, arr) => {
    if (seat === 'L') {
      const numOfSeatsOccupied = checkAdjacentSeats(emptiedLayout, rowIndex, i);

      if (numOfSeatsOccupied === 0) occupiedLayout[rowIndex][i] = '#';
    }
  })
}

function checkAdjacentSeats(seatingLayout, rowIndex, i) {
  const adjacentSeats = [];

  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex - 1, i - 1));
  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex - 1, i + 0));
  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex - 1, i + 1));

  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 0, i - 1));
  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 0, i + 1));

  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 1, i - 1));
  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 1, i + 0));
  adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 1, i + 1));

  numOfSeatsOccupied = adjacentSeats.reduce((acc, cur) => {
    return cur ? acc + 1 : acc;
  }, 0);

  return numOfSeatsOccupied;
}

function isSeatOccupied (seatingLayout, rowIndex, seatIndex) {
  if (seatingLayout[rowIndex][seatIndex] === '#') return true;
  else return false;
}



// console.log(trueFalse('#'));

// function trueFalse (param) {
//   if (param) return true;
//   else return false;
// }