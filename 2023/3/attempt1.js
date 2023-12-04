const fs = require('node:fs')

const filepath = process.cwd() + '/2023/3/input.txt'
let data = ''
try { data = fs.readFileSync(filepath, 'utf8').trim() }
catch (err) { console.error(err) }
const rows = data.split(/\r?\n/)

const partNumbers = new Set()
const symbolsCoords = []

for (let i = 0; i < rows.length; i++) { // Find coords for symbols
  const row = rows[i];

  for (let j = 0; j < row.length; j++) {
    const char = row[j];

    const symbol = char.match(/[^0-9\.]/)?.[0]
    if (symbol) symbolsCoords.push([Number(i),Number(j)])
  }
}

for (const symbol of symbolsCoords) { // Find part numbers
  if (symbol[0] > 0) { // Check row above symbol for numbers
    
  }
  
  // Check same row for numbers
  const symbolRow = rows[symbol[0]]
  const leftSideNum = checkLeftSideForNumbers(symbolRow, symbol)
  const rightSideNum = checkRightSideForNumbers(symbolRow, symbol)
  if (leftSideNum) partNumbers.add(leftSideNum)
  if (rightSideNum) partNumbers.add(rightSideNum)

  if (symbol[0] < rows.length - 1) { // Check row below for numbers

  }
}

function checkRowForNumbers (rowToCheck, symbolColumnNumber) {
  // Get part numbers from a row above or below symbol
}

function checkLeftSideForNumbers (rowToCheck, symbolCoords) {
  const partNumber = ''

  // while (rowToCheck[symbolCoords[1] - 1].match(/\d/)) {
  //   partNumber = rowToCheck[symbolCoords[1] - 1] + partNumber
  // }

  for (let i = 0; whileCondition; i++) {
    partNumber
  }

  return Number(partNumber)
}

function checkRightSideForNumbers (rowToCheck, symbolCoords) {
  // const partNumber = ''

  // while (rowToCheck[symbolCoords[1] - 1].match(/\d/)) {
  //   partNumber = rowToCheck[symbolCoords[1] - 1] + partNumber
  // }

  // return Number(partNumber)
}