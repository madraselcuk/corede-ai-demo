import { AnimationProps } from 'framer-motion'

export const formContainerAnimation: AnimationProps = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.3, duration: 0.5 },
}
