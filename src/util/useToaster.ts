import { useState } from 'react'

export interface Toast {
  message: string
  duration: number
}

export function useToaster() {
  const [toast, setToast] = useState<string>('')

  function addToast(message: string, duration: number) {
    setToast(message)

    if (duration !== 0) {
      setTimeout(() => setToast(''), duration)
    }
  }

  function clearToast() {
    setToast('')
  }

  return {
    toast,
    addToast,
    clearToast,
  }
}
