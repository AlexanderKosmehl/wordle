import { ChangeEvent } from 'react'

const lengthOptions = [4, 5, 6, 7]

interface Props {
  wordLength: number
  setWordLength: (length: number) => void
  newHandler: () => void
}

export default function InfinityConfigBar({
  wordLength,
  setWordLength,
  newHandler,
}: Props) {
  return (
    <div className="flex flex-row justify-center mt-8">
      <div className="flex flex-row justify-center items-center">
        <label
          className="text-white font-semibold mr-2 select-none"
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
        onClick={newHandler}
      >
        Neues Wort
      </button>
    </div>
  )
}
