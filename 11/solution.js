const SeatLayoutObj = require('./test-input');

const rowLength = 10;

const emptiedLayout = SeatLayoutObj.data
  .split('\n')
  .map( el => el.split('') );

const occupiedLayout = JSON.parse(JSON.stringify(emptiedLayout));



occupyArea(emptiedLayout);

console.log(occupiedLayout);



function occupyArea (emptiedArr) {
  emptiedArr.forEach((rowValue, rowIndex) => {
    occupyRow(emptiedArr, rowIndex);
  });
}

function occupyRow (emptiedArr, rowIndex) {
  emptiedArr[rowIndex].forEach((seatValue, seatIndex) => {
    if (seatValue === 'L') {
      const numOfSeatsOccupied = checkAdjacentSeats(emptiedLayout, rowIndex, seatIndex);

      if (numOfSeatsOccupied === 0) occupiedLayout[rowIndex][seatIndex] = '#';
    }
  })
}

function checkAdjacentSeats(seatingLayout, rowIndex, seatIndex) {
  const adjacentSeats = [];
  if (rowIndex > 0) {
    if (seatIndex > 0)
      {adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex - 1, seatIndex - 1));}

    adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex - 1, seatIndex + 0));

    if (seatIndex <= rowLength)
      {adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex - 1, seatIndex + 1));}
  }

    if (seatIndex > 0)
      {adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 0, seatIndex - 1));}

    if (seatIndex <= rowLength)
      {adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 0, seatIndex + 1));}

  if (rowIndex < seatingLayout.length - 1) {
    if (seatIndex > 0)
      {adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 1, seatIndex - 1));}

    adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 1, seatIndex + 0));

    if (seatIndex <= rowLength)
      {adjacentSeats.push(isSeatOccupied(seatingLayout, rowIndex + 1, seatIndex + 1));}
  }

  numOfSeatsOccupied = adjacentSeats.reduce((acc, cur) => {
    return cur ? acc + 1 : acc;
  }, 0);

  return numOfSeatsOccupied;
}

function isSeatOccupied (seatingLayout, rowIndex, seatIndex) {
  const seat = seatingLayout[rowIndex][seatIndex];

  if (seat === '#') return true;
  else return false;
}



// console.log(trueFalse('#'));

// function trueFalse (param) {
//   if (param) return true;
//   else return false;
// }