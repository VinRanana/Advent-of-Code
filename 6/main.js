const GroupAnswers = require('./group-answers.js');

// Turn str into arr of groups
const answersArr = GroupAnswers.data
  .split('\n\n')
  .map(element => {
    const regex = /\n/g;
    return element.replace(regex, '');
  });

// Count num of diff letters in each group
const numbersArr = answersArr.map( element => countLetters(element) );

// Sum the nums
const summedCounts = numbersArr.reduce((acc, cur) => acc + cur);

// Log the result
console.log(summedCounts);



function countLetters (str) {
  let letters = [];

  for (const char of str) {
    if ( !letters.includes(char) ) letters.push(char);
  }

  return letters.length;
}