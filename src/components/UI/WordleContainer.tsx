import { ChangeEvent, createContext, useEffect, useState } from 'react'
import { useToaster } from '../../Util/useToaster'
import ToastContainer from './ToastContainer'
import WordBox from './WordBox'

export const ToastContext = createContext<
  (message: string, duration: number) => void
>(() => {})

interface Props {
  selectedWord: string
  wordList: string[]
}

export default function WordleContainer({ selectedWord, wordList }: Props) {
  const { toast, addToast, clearToast } = useToaster()

  useEffect(() => {
    clearToast()
  }, [selectedWord])

  return (
    <>
      <ToastContainer toast={toast} />
      <ToastContext.Provider value={addToast}>
        <WordBox selectedWord={selectedWord} wordList={wordList} />
      </ToastContext.Provider>
    </>
  )
}
