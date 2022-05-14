import { useState } from 'react'
import { useWords } from '../../util/useWords'
import InfinityConfigBar from '../InfinityConfigBar'
import WordleContainer from '../WordleContainer'

interface Props {}

export default function InfinityContainer({}: Props) {
  const [wordLength, setWordLength] = useState(5)
  const { selectedWord, wordList, refreshWord } = useWords(wordLength)

  return (
    <>
      {selectedWord && wordList ? (
        <>
          <WordleContainer selectedWord={selectedWord} wordList={wordList} />
          <InfinityConfigBar
            wordLength={wordLength}
            setWordLength={setWordLength}
            newHandler={() => refreshWord()}
          />
        </>
      ) : (
        <h2 className="text-center mx-auto text-white text-xl p-8">
          Loading...
        </h2>
      )}
    </>
  )
}
