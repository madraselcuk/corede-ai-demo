import { IMotionItemVariantProps } from './motion-item-variants.interface'

export const itemVariants: IMotionItemVariantProps = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}
