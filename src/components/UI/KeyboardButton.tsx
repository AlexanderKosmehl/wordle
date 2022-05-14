import { Guess } from '../../Types/Guess'

interface Props {
  onClick: () => void
  value: string
  guesses: Guess[]
}

export default function KeyboardButton({ onClick, value, guesses }: Props) {
  const guessStatus = guesses.find((guess) => guess.letter === value)?.status
  let bgColor = ''

  if (guessStatus === 'correct') {
    bgColor = 'bg-correct'
  } else if (guessStatus === 'present') {
    bgColor = 'bg-present'
  } else if (guessStatus === 'absent') {
    bgColor = 'bg-absent'
  } else {
    bgColor = 'bg-gray-300'
  }

  return (
    <button
      className={`h-10 min-w-0 aspect-square rounded-md ${bgColor}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
