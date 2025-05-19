import { motion } from 'framer-motion'
import { containerAnimation } from '@/components/animation/motion'

interface IContainerProps {
  children: React.ReactNode
}

export const Container = (props: IContainerProps) => {
  return (
    <motion.div className="flex flex-col gap-4 h-full" {...containerAnimation}>
      {props.children}
    </motion.div>
  )
}


