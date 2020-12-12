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




for (const instruction of instructions) {
  ferryState = executeInstruction(ferryState, instruction);
}

const manhattanDistance = Math.abs(ferryState.north) + Math.abs(ferryState.east);

console.log(manhattanDistance);




function executeInstruction (ferryState, instruction) {
  if (instruction.action === 'F') {
    ferryState = moveForwards(ferryState, instruction);
  }

  if (instruction.action === 'R' || instruction.action === 'R') {
    ferryState.direction = changeDirection(ferryState, instruction);
  }
  
  else ferryState = reposition(ferryState, instruction);

  return ferryState;
}

function reposition ({north, east, direction}, {action, value}) {
  const newState = {north, east, direction};

  if (action === 'N') newState.north = north + value;
  if (action === 'E') newState.east = east + value;
  if (action === 'S') newState.north = north - value;
  if (action === 'W') newState.east = east - value;

  return newState;
}

function moveForwards ({north, east, direction}, {value}) {
  const newState = {north, east, direction};

  if (direction === 0) newState.north = north + value;
  if (direction === 90) newState.east = east + value;
  if (direction === 180) newState.north = north - value;
  if (direction === 270) newState.east = east - value;

  return newState;
}

function changeDirection ({direction}, {action, value}) {
  if (action === 'R') direction += value;
  else direction += (360 - value);

  return direction % 360;
}