const Rules = require('./rules.js');

// Turn Rules str into arr (split at \n).
const rulesArray = Rules.data.split('\n');
// Create bags obj that has each 1st bag as a property.
const allBags = {};

rulesArray.forEach(element => {
  const regex = /^[a-z]+\s[a-z]+\sbags/

  allBags[ element.match(regex)[0] ] = [];
});

console.log(allBags);

// Each 1st bag property has an arr as value.
// That arr has properties for each bag it can contain.

// Let correctBags = [], finishedBags = [];
// Each bag that contains shiny gold is pushed to correctBags.
// Each bag that contains any bag in correctBags is pushed to correctBags,
// and the bag contained is removed and pushed to finishedBags.
// Use recursion to complete process and find all bags.