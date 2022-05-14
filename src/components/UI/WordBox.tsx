import { useContext, useEffect, useState } from 'react'
import WordBoxRow from './WordBoxRow'
import { ToastContext } from './WordleContainer'

interface Props {
  selectedWord: string
  wordList: string[]
  guessList: string[]
  currentLine: number
}

export default function WordBox({ selectedWord, wordList, guessList, currentLine }: Props) {
  return (
    <div className="flex flex-col space-y-1.5 items-center p-2">
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
