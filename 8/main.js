const BootCode = require('./boot-code.js');
const bootCodeArray = BootCode.data
  .split('\n')
  .map(element => {
    const arr = element.split(' ');
    const obj = {};

    obj.operation = arr[0];
    obj.argument = Number(arr[1]);

    return obj
  })

let accumulator = 0;
let linesExecuted = [];

console.log(bootCodeArray);