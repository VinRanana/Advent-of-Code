const SeatLayoutObj = require('./input');

let emptiedLayout = SeatLayoutObj.data
  .split('\n')
  .map( el => el.split('') );

let occupiedLayout = JSON.parse(JSON.stringify(emptiedLayout));

const rowLength = emptiedLayout[0].length;

let numOccupiedBefore = 0;
let numOccupiedAfter = 0;




console.log(numOccupiedBefore);

do {
  numOccupiedBefore = numOccupiedAfter;
  numOccupiedAfter = ( oneRound() );
  console.log(numOccupiedAfter);
} while (numOccupiedAfter != numOccupiedBefore);




function oneRound () {
  occupyArea(emptiedLayout);
  let occupiedSeatsNow = vacateArea(occupiedLayout);

  return occupiedSeatsNow;
}

function occupyArea (emptiedArr) {
  occupiedLayout = JSON.parse(JSON.stringify(emptiedArr));

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

function vacateArea (occupiedArr) {
  emptiedLayout = JSON.parse(JSON.stringify(occupiedArr));

  let occupiedSeatCount = 0;

  occupiedArr.forEach((rowValue, rowIndex) => {
    occupiedSeatCount += vacateRow(occupiedArr, rowIndex);
  });

  return occupiedSeatCount;
}

function vacateRow (occupiedArr, rowIndex) {
  let occupiedSeatCount = 0;

  occupiedArr[rowIndex].forEach((seatValue, seatIndex) => {
    if (seatValue === '#') {
      const numOfSeatsOccupied = checkAdjacentSeats(occupiedLayout, rowIndex, seatIndex);

      if (numOfSeatsOccupied >= 4) emptiedLayout[rowIndex][seatIndex] = 'L';
      else occupiedSeatCount++;
    }
  })

  return occupiedSeatCount;
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