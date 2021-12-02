const BusNotesData = require('./input').data.split('\n');

const timeReadyForBus = BusNotesData[0];
const busIds = BusNotesData[1]
  .split(',')
  .filter(el => el !== 'x')
  .map(el => Number(el));




const earliestBus = (findEarliestBus(timeReadyForBus, busIds));
const result = multiplyBusIdByWaitingTime(earliestBus, timeReadyForBus);
console.log(result);




function findEarliestBus (timeReadyForBus, busIds) {
  return findEarliestOfEachBus(timeReadyForBus, busIds)
    .reduce((acc, cur) => {
      return cur.earliest < acc.earliest ? cur : acc;
    });
}

function findEarliestOfEachBus (timeReadyForBus, busIds) {
  return busIds.map(el => {
    return {
      id: el,
      earliest: Math.ceil(timeReadyForBus / el) * el
    };
  });
}

function multiplyBusIdByWaitingTime ({id, earliest}, timeReadyForBus) {
  return id * (earliest - timeReadyForBus);
}
