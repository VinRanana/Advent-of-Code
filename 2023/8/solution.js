const fs = require('node:fs')

const filepath = process.cwd() + '/2023/8/input.txt'
let data = ''
try { data = fs.readFileSync(filepath, 'utf8').trim() }
catch (err) { console.error(err) }
const rows = data.split(/\r?\n/)

const directions = rows[0]
const nodes = {}

for (let i = 2; i < rows.length; i++) {
  const row = rows[i];
  const regex = /[A-Z]{3}/g

  const [node, L, R] = row.match(regex)
  nodes[node] = {L, R}
}

let currentNode = 'AAA'
let currentDirection = directions[0]
let directionIndex = 0
let stepsCounter = 0

while (currentNode !== 'ZZZ') {
  currentNode = nodes[currentNode][currentDirection]
  stepsCounter++
  
  directionIndex = (directionIndex === directions.length - 1) ? 0 : directionIndex + 1
  currentDirection = directions[directionIndex]
}

console.log(stepsCounter)
