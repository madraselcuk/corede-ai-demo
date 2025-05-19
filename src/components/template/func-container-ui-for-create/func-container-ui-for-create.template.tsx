import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'
import {
  containerAnimation,
  formFieldsAnimation,
  footerAnimation,
  formContainerAnimation,
} from '@/components/animation/motion'
import { CommonCreateUIComponentProps } from '@/@types/common.func.containers'
import { IGraphqlVariables } from '@common_package'
import { HasChildren } from '@/components/interface'

export const FuncContainerUIForCreateFormTemplate = <TInput,>({
  form,
  handleCreate,
  isLoading,
  uiType = 'container',
  children,
}: CommonCreateUIComponentProps<IGraphqlVariables<TInput>> & HasChildren) => {
  const { t } = useI18n()

  return (
    <Form onSubmit={form.handleSubmit(handleCreate)}>
      <motion.div
        className={`flex flex-col justify-between ${uiType === 'container' ? 'min-h-[calc(100dvh-10rem)]' : ''}`}
      >
        <motion.div className="flex flex-col gap-4" {...containerAnimation}>
          <motion.div className="flex flex-col pb-4" {...formFieldsAnimation}>
            <motion.div
              className={`${uiType === 'container' ? 'border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-xl px-4 py-4 md:px-8 md:py-7 max-w-2xl' : ''}`}
              {...formContainerAnimation}
            >
              <motion.div className="flex flex-col" {...formFieldsAnimation}>
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Submit Button */}
        <motion.div className="sticky bottom-6" {...footerAnimation}>
          <ActionFooter
            uiType={uiType}
            mainAction={{
              type: 'submit',
              title: t('common:create'),
              disabled: !form.formState.isValid,
              loading: isLoading || form.formState.isSubmitting,
            }}
          />
        </motion.div>
      </motion.div>
    </Form>
  )
}
