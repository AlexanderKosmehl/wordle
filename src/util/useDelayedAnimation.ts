import { useEffect, useState } from 'react';

export function useDelayedAnimation (delay: number, animationName: string) {
  const [delayedAnimationClass, setDelayedAnimationClass] = useState('')

  function triggerAnimationWithDelay () {
    setTimeout(() => setDelayedAnimationClass(animationName), delay)
  }

  return { delayedAnimationClass, triggerAnimationWithDelay }
}