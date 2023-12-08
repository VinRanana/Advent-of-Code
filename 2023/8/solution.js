const fs = require('node:fs')

const filepath = process.cwd() + '/2023/7/input.txt'
let data = ''
try { data = fs.readFileSync(filepath, 'utf8').trim() }
catch (err) { console.error(err) }
const rows = data.split(/\r?\n/)
