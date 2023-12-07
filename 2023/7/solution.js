const fs = require('node:fs')

const filepath = process.cwd() + '/2023/7/input.txt'
let data = ''
try { data = fs.readFileSync(filepath, 'utf8').trim() }
catch (err) { console.error(err) }
const hands = data.split(/\r?\n/)

const strengths = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14,
}

hands.sort((handA, handB) => {
  for (let i = 0; i < 5; i++) {
    if (strengths[handA[i]] < strengths[handB[i]]) return -1
    if (strengths[handA[i]] > strengths[handB[i]]) return 1
  }
  return 0
})

const sortedBidsGroupedByType = {
  fiveOfAKind: [],
  fourOfAKind: [],
  fullHouse: [],
  threeOfAKind: [],
  twoPair: [],
  pair: [],
  highestCard: [],
}

for (const hand of hands) {
  const cardCount = {}
  for (let i = 0; i < 5; i++) {
    const card = hand[i]
    if (cardCount[card]) cardCount[card]++
    else cardCount[card] = 1
  }
  
  const frequencies = Object.values(cardCount).sort((a, b) => b - a)
  const bid = Number(hand.split(' ')[1])

  if (frequencies[0] === 5) sortedBidsGroupedByType.fiveOfAKind.push(bid)
  else if (frequencies[0] === 4) sortedBidsGroupedByType.fourOfAKind.push(bid)
  else if (frequencies[0] === 3 && frequencies[1] === 2) sortedBidsGroupedByType.fullHouse.push(bid)
  else if (frequencies[0] === 3) sortedBidsGroupedByType.threeOfAKind.push(bid)
  else if (frequencies[0] === 2 && frequencies[1] === 2) sortedBidsGroupedByType.twoPair.push(bid)
  else if (frequencies[0] === 2) sortedBidsGroupedByType.pair.push(bid)
  else sortedBidsGroupedByType.highestCard.push(bid)
}

const bidsInRankOrder = [
  ...sortedBidsGroupedByType.highestCard,
  ...sortedBidsGroupedByType.pair,
  ...sortedBidsGroupedByType.twoPair,
  ...sortedBidsGroupedByType.threeOfAKind,
  ...sortedBidsGroupedByType.fullHouse,
  ...sortedBidsGroupedByType.fourOfAKind,
  ...sortedBidsGroupedByType.fiveOfAKind,
]

const totalWinnings = bidsInRankOrder.reduce((acc, cur, index) => {
  const winnings = (index + 1) * cur  
  return acc + winnings
}, 0)

console.log(totalWinnings)
