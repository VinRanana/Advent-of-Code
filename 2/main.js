const Passwords = require('./passwords.js');

function convertPasswordsToArray (string) {
  return string.split('\n');
}

function convertElementsToObjects(array) {
  return array.forEach(element => {

    // regex to go here

    element = {min, max, character, password}
  });
}

let result = convertPasswordsToArray(Passwords.data);
result = convertElementsToObjects(result);

console.log( result );