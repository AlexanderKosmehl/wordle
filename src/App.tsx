import { ChangeEvent, createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import ToastContainer from './components/ToastContainer'
import WordBox from './components/WordBox'
import { useToaster } from './util/useToaster'
import { useWords } from './util/useWords'

const lengthOptions = [4, 5, 6, 7]

export const ToastContext = createContext<
  (message: string, duration: number) => void
>(() => {})

export default function App() {
  const [wordLength, setWordLength] = useState(5)
  const { selectedWord, wordList, refreshWord } = useWords(wordLength)
  const { toast, addToast, clearToast } = useToaster()

  function handleNew() {
    refreshWord()
    clearToast()
  }

  return (
    <>
      <Header />

      {selectedWord && wordList ? (
        <>
          <ToastContainer toast={toast} />
          <ToastContext.Provider value={addToast}>
            <WordBox selectedWord={selectedWord} wordList={wordList} />
          </ToastContext.Provider>
          <div className="flex flex-row justify-center mt-8">
            <div className="flex flex-row justify-center items-center">
              <label
                className="text-white font-semibold mr-2"
                htmlFor="lengthSelect"
              >
                Wortlänge:
              </label>
              <select
                className="rounded-md p-0.5"
                id="lengthSelect"
                value={wordLength}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setWordLength(Number(e.target.value))
                }
              >
                {lengthOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="ml-4 px-2 py-1 bg-gray-600 border-2 border-gray-800 rounded-md text-white font-semibold"
              onClick={handleNew}
            >
              Neues Wort
            </button>
          </div>
        </>
      ) : (
        <h2 className="text-center mx-auto text-white text-xl p-8">
          Loading...
        </h2>
      )}
    </>
  )
}
