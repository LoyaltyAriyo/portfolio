import type { Transition, Variants, ViewportOptions } from 'framer-motion'

export const motionEase = [0.22, 1, 0.36, 1] as const

export const revealTransition: Transition = {
  duration: 0.52,
  ease: motionEase,
}

export const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.18,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
    },
  },
}
