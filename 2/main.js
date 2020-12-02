const Passwords = require('./passwords.js');

function convertPasswordsToArray (string) {
  return string.split('\n');
}

function convertElementsToObjects(array) {
  return array.map(element => {
    // regex to go here
    const min = element.match(/\d{1,2}/)[0];
    const max = element.match(/\d{1,2}/g)[1];
    const character = element.match(/\s([a-z])/)[0];
    const password = element.match(/\s([a-z]+)/g)[1];

    return {min, max, character, password};
  });
}

let result = convertPasswordsToArray(Passwords.data);
result = convertElementsToObjects(result);

console.log( result );