const Rules = require('./rules.js');

// Turn Rules str into arr (split at \n).
const rulesArray = Rules.data.split('\n');

// Create bags obj that has each 1st bag as a property.
// Each 1st bag property has an arr as value.
// That arr has each bag it can contain.
const allBags = {};

rulesArray.forEach(element => {
  const containerRegex = /^([a-z]+\s[a-z]+)\sbags/;
  const containedRegex = /([a-z]+\s[a-z]+)\sbags?[\.\,]/g;
  const contained = [];

  [ ...element.matchAll(containedRegex) ]
      .forEach(bag => contained.push(bag[1]));

  allBags[ element.match(containerRegex)[1] ] = contained;
});

// Each bag that contains shiny gold is pushed to containerBags.
const myBag = 'shiny gold'
let containerBags = []; 
let checkedBags = [];

function findContainers (innerBag) { // Adds containers of innerBag to containerBags
  for (const containerBag in allBags) {
    if (allBags.hasOwnProperty(containerBag)) {
      const contentsArr = allBags[containerBag];

      if ( contentsArr.includes(innerBag) && !checkedBags.includes(innerBag) ) {
        containerBags.push(`${containerBag}`)
      };
    }
  }
}
findContainers(myBag);

// Each bag that contains any bag in containerBags is pushed to containerBags,
// and the bag contained is removed and pushed to checkedBags.
// Use a loop to complete the process and find all bags.
while (containerBags.length > 0) {
  const bag = containerBags[0];

  if ( !checkedBags.includes(bag) ) {
    findContainers(bag);
    checkedBags.push(bag);
  }

  containerBags.shift();
}

result = checkedBags.length;

console.log(result);