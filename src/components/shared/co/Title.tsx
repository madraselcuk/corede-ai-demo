import { motion } from 'framer-motion'
import { titleAnimation } from '@/components/animation/motion'

export interface ITitleProps {
  title: string
}

export const Title = (props: ITitleProps) => {
  return (
    <motion.div className="font-bold text-2xl text-center md:text-left" {...titleAnimation}>
      {props.title}
    </motion.div>
  )
}
