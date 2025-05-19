import { IMotionContainerVariantsProps } from './motion-container-variants.interface'

export const containerVariants: IMotionContainerVariantsProps = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}
