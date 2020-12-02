const Passwords = require('./passwords.js');

function convertPasswordsToArray (string) {
  return string.split('\n');
}

function convertElementsToObjects (array) {
  return array.map(element => {

    const min = Number( element.match(/\d{1,2}/)[0] );
    const max = Number( element.match(/\d{1,2}/g)[1] );
    const letter = element.match(/\s([a-z])/)[1];
    const password = element.match(/\s([a-z]+)$/)[1];

    return {min, max, letter, password};
  });
}

// function countLetters (array) {
//   return array.reduce((total, element) => {
//     let count = 0;

//     for (let i = 0; i < element.password.length; i++) {
//       if (element.password[i] == element.letter) count++;
//     }

//     console.log([element.min, element.max, element.letter, element.password, count]);
//     console.log(total);
//     if (count >= element.min && count <= element.max) total++;
//     console.log(total);
//   }, 0)
// }

let result = convertPasswordsToArray(Passwords.data);
result = convertElementsToObjects(result);
// result = countLetters(result);

console.log( result );