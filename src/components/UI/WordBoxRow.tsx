import WordBoxCell from './WordBoxCell'

interface Props {
  selectedWord: string
  guess: string
  shouldShowResults: boolean
}

export default function WordBoxRow({
  selectedWord,
  guess,
  shouldShowResults,
}: Props) {
  return (
    <div className="flex flex-row space-x-1.5">
      {selectedWord.split('').map((_, index) => {
        return (
          <WordBoxCell
            key={index}
            index={index}
            selectedWord={selectedWord}
            guessedLetter={guess.charAt(index)}
            shouldShowResult={shouldShowResults}
          />
        )
      })}
    </div>
  )
}
