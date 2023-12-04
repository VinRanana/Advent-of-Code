//! UNFINISHED

const fs = require('node:fs')

const filepath = process.cwd() + '/2023/3/input.txt'
let data = ''
try { data = fs.readFileSync(filepath, 'utf8').trim() }
catch (err) { console.error(err) }

const rowsRaw = data.split(/\r?\n/)
const rows = rowsRaw.map(row => ('.' + row + '.')) // This helps with indexOf later
const partNumbers = []

for (let rowNum = 0; rowNum < rows.length; rowNum++) { // Loop through rows
  const row = rows[rowNum];
  
  const numbers = row.match(/\d+/g) // Use regex on each row to find numbers
  
  for (const number of numbers) { // Loop through numbers
    const colNum = row.indexOf('.' + number + '.') + 1 // Use indexOf to find the number's colNum
    // ! There can be more than one of the same number in the same row!
      // Use .46. so as not to get the index of 462 or 146
      // The index will actually be the value + 1 (as value will be the first '.')

    // Check all round the number for symbols
    for (let y = -1; y <= 1; y++) { // Loop through the three relevant rows
      if (0 <= rowNum + y && rowNum + y < rows.length) { // Prevents checking rows outside of the schematic
        
        for (let x = -1; x <= number.length; x++) {
          if (0 <= colNum + x && colNum + x <= row.length) { // Prevents checking columns outside of the schematic

            const char = rows[rowNum + y][colNum + x]
            if (number == '484' && rowNum == '0') console.table({number, rowNum, colNum, y, x, char})
            
            if (char.match(/[^0-9\.]/)) { // If a symbol is present, add number to the partNumbers set and continue to next number
              console.log('adding number: ', number)
              
              partNumbers.push(Number(number))
              // TODO: Write an early exit
            }
          }
        }
      }
    }
  }
}

let sum = 0

partNumbers.forEach(num => { 
  console.log('num: ', num)
  sum += num
})

console.log('sum: ', sum) // Return(log) sum of partNumbers
