import { useEffect, useState } from 'react'
import shareIcon from '../../Assets/shareIcon.png'

interface Props {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

export default function CompletionModal({ isVisible, setIsVisible }: Props) {
  const [timeLeft, setTimeLeft] = useState('')

  // Create timer string
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const hour = now.getHours()
      const minute = now.getMinutes()
      const seconds = now.getSeconds()

      const hourLeft = 23 - hour
      const minuteLeft = 59 - minute
      const secondsLeft = 59 - seconds

      setTimeLeft(`${hourLeft}:${minuteLeft}:${secondsLeft}`)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // Prepare clipboard string
  function sendTextToClipboard() {
    navigator.clipboard.writeText('JS!')
  }

  return (
    <div
      className={`${
        isVisible ? '' : 'hidden'
      } fixed z-10 left-0 top-0 w-full h-screen bg-black bg-opacity-30`}
    >
      <div className="bg-background text-white rounded-lg mt-28 max-w-lg p-4 mx-auto flex flex-col justify-center">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4 border-white">
          <h1 className="font-bold text-xl">Ergebnis</h1>
          <span
            className="cursor-pointer select-none font-bold text-3xl text-gray-50"
            onClick={() => setIsVisible(false)}
          >
            &times;
          </span>
        </div>

        {/* Modal Content */}
        <p className="py-8 text-xl font-bold text-center">Richtig!</p>

        {/* Bottom */}
        <div className="flex items-center">
          {/* Timer */}
          <div className="flex flex-col items-center w-1/2 border-r border-white p-4">
            <span className="font-bold text-lg">Nächstes Puzzle in:</span>
            <span className="font-bold text-2xl">{timeLeft}</span>
          </div>

          {/* Share */}
          <div className="flex justify-center w-1/2">
            <button
              className="bg-green-600 rounded-lg flex items-center px-4 py-3"
              onClick={sendTextToClipboard}
            >
              <span className="font-bold text-xl">Share</span>
              <img
                className="invert w-6 h-6 ml-2"
                src={shareIcon}
                alt="Share Icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
