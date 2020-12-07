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

console.log(allBags);


// Let correctBags = [], finishedBags = [];
// Each bag that contains shiny gold is pushed to correctBags.
// Each bag that contains any bag in correctBags is pushed to correctBags,
// and the bag contained is removed and pushed to finishedBags.
// Use recursion to complete process and find all bags.