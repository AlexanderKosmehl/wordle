import { useEffect, useState } from 'react'
import { useDelayedClasses } from '../util/useDelayedAnimation'

interface Props {
  index: number
  selectedWord: string
  guessedLetter: string
  shouldShowResult: boolean
}

export default function WordBoxCell({
  selectedWord,
  guessedLetter,
  index,
  shouldShowResult,
}: Props) {
  // Prepare correct background color
  let bgColor = ''
  if (shouldShowResult) {
    if (selectedWord[index] === guessedLetter) {
      bgColor = 'bg-correct'
    } else if (selectedWord.includes(guessedLetter)) {
      bgColor = 'bg-present'
    } else {
      bgColor = 'bg-absent'
    }
  }

  // Set
  const { delayedClass, triggerDelayedEffect } = useDelayedClasses(
    index * 200,
    `reveal ${bgColor}`
  )

  useEffect(() => {
    if (shouldShowResult) triggerDelayedEffect()
  }, [shouldShowResult])

  useEffect(() => {})

  return (
    <div
      className={`w-16 h-16 flex justify-center items-center font-bold font-mono text-4xl border-2 rounded-md border-gray-700 text-white select-none ${delayedClass}`}
    >
      {guessedLetter}
    </div>
  )
}
