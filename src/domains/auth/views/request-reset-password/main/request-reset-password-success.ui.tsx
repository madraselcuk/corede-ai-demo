'use client'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { authPaths } from '@/domains/auth/routes/auth.path'
import { Send } from 'lucide-react'
import { containerVariants, itemVariants } from '@/domains/auth/common/motion'

export const RequestResetPasswordSuccessUI = () => {
  const { t } = useI18n()
  const router = useRouter()

  return (
    <motion.div
      className="flex flex-col h-screen gap-6 items-center justify-center text-center"
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full p-5"
      >
        <Send className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {t('auth:checkYourInbox')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t('auth:resetPasswordAfterSuccess1')}
        </p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button
          onClick={() => {
            router.push(authPaths.auth.signIn)
          }}
        >
          {t('auth:backToLogin')}
        </Button>
      </motion.div>
    </motion.div>
  )
}
