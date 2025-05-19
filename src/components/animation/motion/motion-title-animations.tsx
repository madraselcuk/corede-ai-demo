import { AnimationProps } from 'framer-motion'

export const titleAnimation: AnimationProps = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.4 },
}
