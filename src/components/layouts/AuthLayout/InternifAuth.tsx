'use client'
import { cloneElement } from 'react'
import type { CommonProps } from '@/@types/common'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

type SideProps = CommonProps

const InternifAuth = ({ children, ...rest }: SideProps) => {
  const router = useRouter()

  const handleHome = () => {
    router.push('/')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="flex min-h-screen bg-white dark:bg-gray-800 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        onClick={handleHome}
        className="absolute top-[1rem] right-[1rem] w-28 h-24 z-10 hidden lg:block cursor-pointer"
        variants={itemVariants}
      >
        <motion.img
          src="/img/others/auth/right-top-dark.png"
          alt="auth-bg"
          className="w-28 h-24 dark:block hidden"
          variants={itemVariants}
        />
        <motion.img
          src="/img/others/auth/right-top-light.png"
          alt="auth-bg2"
          className="w-28 h-24 dark:hidden block"
          variants={itemVariants}
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-start items-center flex-1  px-4 md:px-6 overflow-y-auto max-h-screen scrollbar-hide"
        variants={itemVariants}
      >
        <motion.div
          className="w-full xl:max-w-[450px] px-8 max-w-[380px]"
          variants={itemVariants}
        >
          {children
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              cloneElement(children as React.ReactElement<any>, {
                ...rest,
              })
            : null}
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:block relative my-4 flex-1 max-w-[520px] 2xl:max-w-[720px]"
        variants={itemVariants}
      >
        <motion.img
          src="/img/others/auth/auth-img-1.jpg"
          className="fixed top-0 right-[1rem] h-[calc(100dvh-2rem)] mt-[1rem] max-w-[520px] 2xl:max-w-[720px] rounded-3xl object-cover"
          alt="auth-side-bg"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default InternifAuth
