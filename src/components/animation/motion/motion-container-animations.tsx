import { AnimationProps } from "framer-motion";


export const containerAnimation: AnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}
