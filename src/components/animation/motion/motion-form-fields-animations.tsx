import { AnimationProps } from 'framer-motion'

export const formFieldsAnimation: AnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.4, duration: 0.5 },
}