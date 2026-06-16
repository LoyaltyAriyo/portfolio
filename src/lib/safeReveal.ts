import { useEffect, useState } from 'react'
import type { Variants } from 'framer-motion'
import { motionEase } from './motion'

export const safeCardReveal: Variants = {
  hidden: { opacity: 0.001 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: motionEase,
    },
  },
}

function isSafariBrowser() {
  const ua = window.navigator.userAgent
  return /^((?!chrome|android|crios|fxios|edgios|opr|opera).)*safari/i.test(ua)
}

function shouldUseSafeReveal() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(max-width: 767px)').matches || isSafariBrowser()
}

export function useSafeCardReveal() {
  const [safeReveal, setSafeReveal] = useState(shouldUseSafeReveal)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const updateSafeReveal = () => {
      setSafeReveal(shouldUseSafeReveal())
    }

    updateSafeReveal()
    mobileQuery.addEventListener('change', updateSafeReveal)

    return () => {
      mobileQuery.removeEventListener('change', updateSafeReveal)
    }
  }, [])

  return safeReveal
}
