const fs = require('fs')
const path = require('path')

function parseHtmlEnteties(str) {
  return str.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10) // read num as normal number
    return String.fromCharCode(num)
  })
}

const wordlist = fs
  .readFileSync(path.resolve(__dirname, 'german_words.txt'))
  .toString()
  .split('\r\n')

const filteredWords = wordlist
  .filter((word) => word.length >= 4 && word.length <= 7)
  .filter(
    (word) => ![' ', '-'].some((forbiddenChar) => word.includes(forbiddenChar))
  )

const wordlist2 = fs
  .readFileSync(path.resolve(__dirname, 'german_words2.txt'))
  .toString()
  .split('\r\n')
  .map((word) => parseHtmlEnteties(word))
  .map((word) => word.toUpperCase())

const wordSet = new Set([...wordlist, ...wordlist2])

fs.writeFileSync(
  path.resolve(__dirname, 'wordlist.json'),
  JSON.stringify(Array.from(wordSet), null, 2)
)