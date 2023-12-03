const fs = require('node:fs')

const filepath = process.cwd() + '/2023/2/input.txt'
let data = ''
try { data = fs.readFileSync(filepath, 'utf8').trim() }
catch (err) { console.error(err) }

const imaginaryBag = {red: 12, green: 13, blue: 14}
const allGames = data.split(/\r?\n/)

const possibleGames = allGames.map((game) => {
  const allNumbers = game.match(/\d+/g) // Game number, then all numbers of dice

  for (let i = 1; i < allNumbers.length; i++) { 
    if (Number(allNumbers[i]) > 14) return null // Early exit
  }
  
  const dices = game.match(/\d+ \w+/g)
  for (const dice of dices) {
    const num = Number(dice.match(/\d+/)[0])
    const colour = dice.match(/red|blue|green/)[0]

    if (num >= 12 && imaginaryBag[colour] < num) return null
  }
  
  return Number(allNumbers[0])
})

const sumOfIDs = possibleGames.reduce((acc,cur) => cur ? acc + cur : acc)
console.log('sumOfIDs: ', sumOfIDs);
