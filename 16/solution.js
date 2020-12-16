
const Input = require('./input').data.split('\n\n');

const rulesInput = Input[0].split('\n');
const myTicket = Input[1].split(/[\n,]/).splice(1);
const nearbyTickets = Input[2].split('\n').splice(1);
const rulesArr = ruleFactory(rulesInput);




console.log(rulesArr);




function ruleFactory (input) {
  return input.map(el => {
    let obj = {}

    obj.ruleName = el.match(/(^.*):/)[1];
    obj.firstMin = el.match(/\d+/g)[0];
    obj.firstMax = el.match(/\d+/g)[1];
    obj.secondMin = el.match(/\d+/g)[2];
    obj.secondMax = el.match(/\d+/g)[3];

    return obj;
  })
}
