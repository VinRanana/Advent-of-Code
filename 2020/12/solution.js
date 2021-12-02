const NavigationInstructionsData = require('./input').data.split('\n');
// 2564 is too high!
const instructions = NavigationInstructionsData.map(el => {
  let obj = {};
  obj.action = el.match(/[E-W]/)[0];
  obj.value = Number( el.match(/\d+/)[0] );
  return obj;
})

let ferryState = {
  north: 0,
  east: 0,
  direction: 90
}




for (let instruction of instructions) {
  ferryState = executeInstruction(ferryState, instruction);
}

const manhattanDistance = Math.abs(ferryState.north) + Math.abs(ferryState.east);

console.log(manhattanDistance);




function executeInstruction (ferryState, instruction) {
  if (instruction.action === 'F') {
    ferryState = moveForwards(ferryState, instruction);
  }

  if (instruction.action === 'R' || instruction.action === 'L') {
    ferryState.direction = changeDirection(ferryState, instruction);
  }
  
  else ferryState = reposition(ferryState, instruction);

  return ferryState;
}

function reposition ({north, east, direction}, {action, value}) {
  if (action === 'N') north += value;
  if (action === 'E') east += value;
  if (action === 'S') north -= value;
  if (action === 'W') east -= value;

  return {north, east, direction};
}

function moveForwards ({north, east, direction}, {value}) {
  if (direction === 0) north += value;
  if (direction === 90) east += value;
  if (direction === 180) north -= value;
  if (direction === 270) east -= value;

  return {north, east, direction};
}

function changeDirection ({direction}, {action, value}) {
  if (action === 'L') direction += (360 - value);
  else if (action === 'R') direction += value;

  return direction % 360;
}