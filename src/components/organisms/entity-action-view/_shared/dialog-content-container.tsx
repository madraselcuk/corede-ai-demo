import { motion } from 'framer-motion'
import { HasChildren } from '@/components/interface'

export const DialogContentContainer = (props: HasChildren) => {
  return (
    <motion.div className="flex flex-col gap-4">{props.children}</motion.div>
  )
}
