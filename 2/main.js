const Passwords = require('./passwords.js');

function convertPasswordsToArray (string) {
  return string.split('\n');
}

function convertElementsToObjects(array) {
  return array.map(element => {
    // regex to go here
    const min = element.match(/\d{1,2}/)[0];
    return {min};
  });
}

let result = convertPasswordsToArray(Passwords.data);
result = convertElementsToObjects(result);

console.log( result );