import { useEffect, useState } from 'react'
import WordBoxRow from './WordBoxRow'

const intendedRows = [
  { length: 4, rows: 5 },
  { length: 5, rows: 6 },
  { length: 6, rows: 7 },
  { length: 7, rows: 8 },
]

function generateNewGuessList(wordLength: number) {
  return Array(
    intendedRows.find((entry) => entry.length === wordLength)?.rows
  ).fill('')
}

interface Props {
  selectedWord: string
  wordList: string[]
}

export default function WordBox({ selectedWord, wordList }: Props) {
  const [guessList, setGuessList] = useState<string[]>(
    generateNewGuessList(selectedWord.length)
  )
  const [currentLine, setCurrentLine] = useState(0)
  const [completed, setCompleted] = useState(false)

  /**
   *  Helper function to check the current word
   */
  function checkWord() {
    // Valid Word
    if (
      !wordList.some(
        (word) => word.toLowerCase() === guessList[currentLine].toLowerCase()
      )
    ) {
      return
    }

    // Prepare next line
    setCurrentLine((currentLine) => currentLine + 1)

    // Check for solution
    if (guessList?.[currentLine] === selectedWord) {
      console.log('Correct!')
      window.removeEventListener('keydown', globalKeyHandler)
      setCompleted(true)
      return
    }

    // Handle failure
    if (currentLine > 5) {
      console.log('You lose!')
      window.removeEventListener('keydown', globalKeyHandler)
      setCompleted(true)
    }
  }

  /**
   * Helper function to handle letter inputs
   * @param letter the new letter
   */
  function handleInput(letter: string) {
    setGuessList((oldGuessList) =>
      oldGuessList.map((oldGuess, index) => {
        if (index === currentLine && oldGuess.length < selectedWord.length) {
          return oldGuess + letter.toUpperCase()
        } else {
          return oldGuess
        }
      })
    )
  }

  /**
   * Helper function to handle deletion letters in the current line
   */
  function handleDeletion() {
    setGuessList((oldGuessList) =>
      oldGuessList.map((oldGuess, index) => {
        if (index === currentLine && oldGuess.length > 0) {
          return oldGuess.substring(0, oldGuess.length - 1)
        } else {
          return oldGuess
        }
      })
    )
  }

  /**
   * Event handler for global key detection instead of input fields
   * @param e the detected key event
   */
  function globalKeyHandler(e: KeyboardEvent) {
    if (e.key.match(/^[a-zA-ZäöüÄÖÜß]$/)) {
      handleInput(e.key)
    }

    if (e.key === 'Backspace') {
      handleDeletion()
    }

    if (e.key === 'Enter') {
      checkWord()
    }
  }

  useEffect(() => {
    if (completed) return

    window.addEventListener('keydown', globalKeyHandler)
    return () => window.removeEventListener('keydown', globalKeyHandler)
  }, [currentLine, guessList, selectedWord])

  useEffect(() => {
    setCompleted(false)
    setCurrentLine(0)
    setGuessList(generateNewGuessList(selectedWord.length))
  }, [selectedWord])

  return (
    <div className="flex flex-col space-y-1.5 items-center py-28">
      {guessList.map((guess, index) => (
        <WordBoxRow
          key={index}
          selectedWord={selectedWord}
          guess={guess}
          shouldShowResults={currentLine > index}
        />
      ))}
    </div>
  )
}
