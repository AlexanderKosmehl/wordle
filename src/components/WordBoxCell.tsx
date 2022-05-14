import { useEffect, useState } from 'react'
import { useDelayedAnimation } from '../util/useDelayedAnimation'

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
  const [bgColor, setBgColor] = useState('')
  useEffect(() => {
    if (shouldShowResult) {
      if (selectedWord[index] === guessedLetter) {
        setBgColor('bg-correct')
      } else if (selectedWord.includes(guessedLetter)) {
        setBgColor('bg-present')
      } else {
        setBgColor('bg-absent')
      }
    }
  }, [shouldShowResult])

  const { delayedAnimationClass, triggerAnimationWithDelay } =
    useDelayedAnimation(index * 200, `reveal ${bgColor}`)

  useEffect(() => {
    if (shouldShowResult) triggerAnimationWithDelay()
  }, [shouldShowResult])

  return (
    <div
      className={`w-16 h-16 flex justify-center items-center font-bold font-mono text-4xl border-2 rounded-md border-gray-700 text-white select-none ${bgColor} ${
        shouldShowResult ? delayedAnimationClass : ''
      }`}
    >
      {guessedLetter}
    </div>
  )
}
