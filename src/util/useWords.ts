import { useEffect, useState } from 'react'
import wordlistUrl from '../assets/wordlist.json?url'

export function useWords(length: number) {
  const [wordList, setwordList] = useState<string[] | null>()
  const [selectedWord, setSelectedWord] = useState<string | null>()

  useEffect(() => {
    fetch(wordlistUrl)
      .then((response) => response.json())
      .then((wordList: string[]) => setwordList(wordList))
  }, [])

  function selectNewWord() {
    const possibleWords = wordList?.filter((word) => word.length === length)
    const chosenWord =
      possibleWords?.[
        Math.floor(Math.random() * possibleWords.length)
      ].toUpperCase()

    if (!chosenWord) return
    setSelectedWord(chosenWord)
  }

  useEffect(() => {
    selectNewWord()
  }, [wordList])

  return {
    wordList: wordList?.filter((word) => word.length === length),
    selectedWord,
    refreshWord: selectNewWord,
  }
}
