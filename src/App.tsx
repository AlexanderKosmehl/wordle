import { ChangeEvent, useEffect, useState } from 'react'
import Header from './components/Header'
import WordBox from './components/WordBox'
import { useWords } from './util/useWords'

const lengthOptions = [4, 5, 6, 7]

export default function App() {
  const [wordLength, setWordLength] = useState(5)
  const { selectedWord, wordList, refreshWord } = useWords(wordLength)

  return (
    <>
      <Header />

      {selectedWord && wordList ? (
        <>
          <WordBox selectedWord={selectedWord} wordList={wordList} />
          <div className="flex flex-row justify-center">
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
              onClick={refreshWord}
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
