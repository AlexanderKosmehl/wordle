import { useEffect, useState } from 'react';

export function useDelayedClasses (delay: number, classes: string) {
  const [delayedClass, setDelayedClass] = useState('')

  function triggerDelayedEffect () {
    setTimeout(() => setDelayedClass(classes), delay)
  }

  useEffect(() => {
    setDelayedClass('')
  }, [classes, delay])

  return { delayedClass, triggerDelayedEffect }
}