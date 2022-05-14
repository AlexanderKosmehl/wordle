import { ChangeEvent, createContext, useEffect, useState } from 'react'
import { useToaster } from '../../Util/useToaster'
import Keyboard from './Keyboard'
import ToastContainer from './ToastContainer'
import WordBox from './WordBox'

export const ToastContext = createContext<
  (message: string, duration: number) => void
>(() => {})

function getRowsForLength(length: number) {
  return length + 1
}

interface Props {
  selectedWord: string
  wordList: string[]
}

export default function WordleContainer({ selectedWord, wordList }: Props) {
  const { toast, addToast, clearToast } = useToaster()
  const [guessList, setGuessList] = useState<string[]>(
    Array(getRowsForLength(selectedWord.length)).fill('')
  )
  const [currentLine, setCurrentLine] = useState(0)
  const [completed, setCompleted] = useState(false)

  // Clear Completion Toast on new word
  useEffect(() => {
    clearToast()
  }, [selectedWord])

  /**
   *  Helper function to check the current word
   */
  function checkWord() {
    // Valid Word
    // if (
    //   !wordList.some(
    //     (word) => word.toLowerCase() === guessList[currentLine].toLowerCase()
    //   )
    // ) {
    //   addToast('Unbekanntes Wort', 2000)
    //   return
    // }

    // Prepare next line
    setCurrentLine((currentLine) => currentLine + 1)

    // Check for solution
    if (guessList?.[currentLine] === selectedWord) {
      window.removeEventListener('keydown', globalKeyHandler)
      setCompleted(true)
      addToast('Richtig!', 0)
      return
    }

    // Handle failure
    if (currentLine > getRowsForLength(selectedWord.length)) {
      window.removeEventListener('keydown', globalKeyHandler)
      setCompleted(true)
      addToast('Leider verloren!', 0)
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
    setGuessList(Array(getRowsForLength(selectedWord.length)).fill(''))
  }, [selectedWord])

  return (
    <>
      <ToastContainer toast={toast} />
      <ToastContext.Provider value={addToast}>
        <WordBox
          selectedWord={selectedWord}
          wordList={wordList}
          guessList={guessList}
          currentLine={currentLine}
        />
      </ToastContext.Provider>
      <Keyboard />
    </>
  )
}
