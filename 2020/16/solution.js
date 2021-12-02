const Input = require('./input').data.split('\n\n');

const rulesInput = Input[0].split('\n');
const rulesArr = ruleFactory(rulesInput);
const myTicket = Input[1].split(/[\n,]/).splice(1);
const nearbyTicketsInput = Input[2].split('\n').splice(1);
const nearbyTicketsArr = nearbyTicketsInput.map(el => {
  let arr = el.split(',');
  return arr.map(el => Number(el));
});



let result = calculateErrorRate(rulesArr, nearbyTicketsArr);
console.log(result);




function ruleFactory (arr) {
  return arr.map(el => {
    let obj = {}

    obj.ruleName = el.match(/(^.*):/)[1];
    obj.firstMin = Number(el.match(/\d+/g)[0]);
    obj.firstMax = Number(el.match(/\d+/g)[1]);
    obj.secondMin = Number(el.match(/\d+/g)[2]);
    obj.secondMax = Number(el.match(/\d+/g)[3]);

    return obj;
  })
}

function calculateErrorRate (rulesArr, nearbyTicketsArr) {
  let ranges = [];
  
  rulesArr.forEach(el => {
    ranges.push(
      [el.firstMin, el.firstMax],
      [el.secondMin, el.secondMax]
    );
  });

    
  let invalidValues = [];
  
  for (const ticket of nearbyTicketsArr) {
    for (const num of ticket) {
      let inRange = false;

      for (const range of ranges) {
        if (range[0] <= num && num <= range[1]) {
          inRange = true;
          break;
        }
      }
      
      if (!inRange) invalidValues.push(num);
    }
  }

  return invalidValues.reduce((acc, cur) => acc + cur);
}
