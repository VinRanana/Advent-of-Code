const fs = require('node:fs');

const filepath = process.cwd() + '/2023/1/input.txt'
let data = ''
try {
  data = fs.readFileSync(filepath, 'utf8');
} catch (err) {
  console.error(err);
}

const lines = data.split(/\r?\n/)
const sum = lines.reduce((acc, cur) => {
  const digits = cur.match(/\d/g)
  const calibrationValue = Number(digits.at(0) + digits.at(-1))
  return acc + calibrationValue
}, 0)

console.log('sum: ', sum);
