'use client'
import { motion } from 'framer-motion'
import { SignUpVerifyFormContainer } from '../sign-up-verify-form.container'
import { SignUpVerifyFormUI } from './sign-up-verify-form.ui'
import { itemVariants, containerVariants } from '@/domains/auth/common/motion'
import { ShieldCheck } from 'lucide-react'
import { useI18n } from '@/localization/hooks/useI18n'

export const SignUpVerifyUI = () => {
  const { t } = useI18n()
  return (
    <motion.div
      className="flex flex-col min-h-[100dvh] gap-6  items-center justify-center text-center  py-16"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-start gap-4">
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full p-5"
        >
          <ShieldCheck className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t('auth:emailConfirmationTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t('auth:enterOtp')}
          </p>
        </motion.div>
      </div>
      <SignUpVerifyFormContainer>
        {(props) => <SignUpVerifyFormUI {...props} />}
      </SignUpVerifyFormContainer>
    </motion.div>
  )
}
