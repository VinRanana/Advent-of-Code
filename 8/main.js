const BootCode = require('./boot-code.js');

const bootCodeArray = BootCode.data
  .split('\n')
  .map(element => {
    const arr = element.split(' ');
    const obj = {};

    obj.operation = arr[0];
    obj.argument = Number(arr[1]);

    return obj
  });

let accumulator = 0;
let linesExecuted = [];
let index = 0



while (!linesExecuted.includes(index)) {
  executeInstruction(
    bootCodeArray[index].operation, 
    bootCodeArray[index].argument
  );
}

console.log(accumulator);



function executeInstruction (operation, argument) {
  linesExecuted.push(index);
  index++;

  if (operation === 'acc') accumulator += argument;
  if (operation === 'jmp') index += argument - 1;
}