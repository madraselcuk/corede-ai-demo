'use client'

import { SignUpFormContainerUIProps } from '../sign-up-form.container'
import { Form } from '@/components/ui/Form'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
import { FormPasswordFieldGroupV2 } from '@/components/molecules/form-password-field/form-password-field-v2'
import Button from '@/components/ui/Button'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'
import {
  IMotionContainerVariantsProps,
  IMotionItemVariantProps,
} from '@/domains/auth/common/motion'

export interface SignUpFormUIProps extends SignUpFormContainerUIProps {
  containerVariants: IMotionContainerVariantsProps
  itemVariants: IMotionItemVariantProps
}

export const SignUpFormUI = ({
  form,
  handleRegisterSubmit,
  isLoading,
  navigateToSignIn,
  containerVariants,
  itemVariants,
}: SignUpFormUIProps) => {
  const { t } = useI18n()

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <>
        <motion.div
          className="flex flex-col gap-2 justify-center items-center"
          variants={itemVariants}
        >
          <motion.img
            src="/img/logo/coredeai_logo_light.svg"
            alt="logo"
            className="h-6 mb-8 dark:block hidden"
            variants={itemVariants}
          />
          <motion.img
            src="/img/logo/coredeai_logo.svg"
            alt="logo"
            className="h-6 mb-8 dark:hidden block"
            variants={itemVariants}
          />
          <motion.p
            className="text-3xl text-gray-800 dark:text-gray-200 font-semibold"
            variants={itemVariants}
          >
            {t('auth:signUpNow')}
          </motion.p>
          <motion.p
            className="text-md text-gray-600 dark:text-gray-400 font-light"
            variants={itemVariants}
          >
            {t('auth:signUpSubtitle')}
          </motion.p>
          <motion.div
            className="flex gap-4 w-full bg-[#0077B5] cursor-pointer rounded-xl p-3 items-center justify-center text-white font-semibold"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/img/icons/linkedin-icon.png"
              alt="linkedin"
              className="w-6 h-6"
            />
            {t('auth:continueWithLinkedIn')}
          </motion.div>
          <motion.div
            className="flex gap-4 w-full border border-gray-300 dark:border-gray-500 cursor-pointer rounded-xl p-3 items-center justify-center text-gray-800 dark:text-white font-semibold"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/img/icons/google-icon.png"
              alt="google"
              className="w-6 h-6"
            />
            {t('auth:continueWithGoogle')}
          </motion.div>
          <motion.div
            className="flex items-center w-full"
            variants={itemVariants}
          >
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-500"></div>
            <span className="px-4 text-gray-500 dark:text-gray-400">
              {t('auth:orSignUpWithEmail')}
            </span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-500"></div>
          </motion.div>
        </motion.div>

        <Form onSubmit={form.handleSubmit(handleRegisterSubmit)}>
          {/* Name Field */}
          <motion.div
            className="flex gap-2 items-center"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <FormTextFieldGroupV2
                form={form}
                hookName={'input.name'}
                label={t('common:name')}
                inputProps={{
                  placeholder: t('common:name'),
                }}
              />
            </motion.div>

            {/* Surname Field */}
            <motion.div variants={itemVariants}>
              <FormTextFieldGroupV2
                form={form}
                hookName={'input.surname'}
                label={t('common:surname')}
                inputProps={{
                  placeholder: t('common:surname'),
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            {/* Email Field */}
            <FormEmailFieldGroupV2
              form={form}
              label={t('auth:emailAddress')}
              inputProps={{
                placeholder: t('auth:emailAddress'),
              }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            {/* Password Field */}
            <FormPasswordFieldGroupV2
              form={form}
              label={t('auth:password')}
              inputProps={{
                placeholder: t('auth:password'),
              }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            {/* Password Again Field */}
            <FormPasswordFieldGroupV2
              form={form}
              hookName="input.passwordAgain"
              label={t('auth:confirmPassword')}
              inputProps={{
                placeholder: t('auth:confirmPassword'),
              }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="flex flex-col gap-4 mt-4"
            variants={itemVariants}
          >
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              loading={isLoading || form.formState.isSubmitting}
            >
              {t('auth:signUp')}
            </Button>

            {/* Already have account - go to sign in */}
            <div className="flex items-center gap-1 justify-center">
              <span className="text-sm text-gray-600 dark:text-gray-500 text-center">
                {t('auth:alreadyHaveAccount')}
              </span>
              <a className="text-sm text-primary" onClick={navigateToSignIn}>
                {' '}
                <span className="text-sm text-primary cursor-pointer">
                  {t('auth:signIn')}
                </span>
              </a>
            </div>
          </motion.div>
        </Form>
      </>
    </motion.div>
  )
}

export default SignUpFormUI
