'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { useRouter } from 'next/navigation'
import { SubscriptionFormUpdateFormContainerUIProps } from '../subscription-form-update-form.container'
import { formFullPath, formPaths } from '@/domains/form/routes/form.path'
import { FormFieldWrapper } from '@/components/molecules/form-field-wrapper'
import { EnumSelect } from '@/components/atoms/select-enum/enum-select'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'
import { SubscriptionFormCreateUserType } from '@corede_package'
import { Language } from '@common_package'
import { TranslationResourceNamespace } from '@/localization/resources'
import { FormCheckboxFieldGroup } from '@/components/molecules/form-check-field'

export const SubscriptionFormUpdateFormUI = ({
  form,
  handleUpdateSubscriptionForm,
  isLoading,
  connectionError,
  noDataError,
}: SubscriptionFormUpdateFormContainerUIProps) => {
  const router = useRouter()
  const { t } = useI18n()

  const userTypeOptions =
    EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
      enumObj: SubscriptionFormCreateUserType,
      enumName: 'SubscriptionFormCreateUserType',
      namespace: TranslationResourceNamespace.form,
    })

  const languageOptions =
    EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
      enumObj: Language,
      enumName: 'Language',
      namespace: TranslationResourceNamespace.common,
    })

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('form:noSubscriptionFormFound')} />
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateSubscriptionForm)}>
            {/* Email Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.email"
              label={{
                content: t('common:email'),
              }}
            />

            {/* User Type Field */}
            <FormFieldWrapper
              form={form}
              hookName="input.userType"
              label={{
                content: t('common:userType'),
              }}
              inputComponent={EnumSelect}
              inputProps={{
                options: userTypeOptions,
                select: {
                  search: {
                    noSearch: true,
                  },
                },
              }}
            />

            {/* Language Field */}
            <FormFieldWrapper
              form={form}
              hookName="input.language"
              label={{
                content: t('common:language'),
              }}
              inputComponent={EnumSelect}
              inputProps={{
                options: languageOptions,
                select: {
                  search: {
                    noSearch: true,
                  },
                },
              }}
            />

            {/* Topic Subscriptions */}
            <FormCheckboxFieldGroup
              form={form}
              hookName="input.newsTopicSubscribed"
              label={{
                content: t('common:newsTopic'),
              }}
            />

            <FormCheckboxFieldGroup
              form={form}
              hookName="input.blogTopicSubscribed"
              label={{
                content: t('common:blogTopic'),
              }}
            />

            <FormCheckboxFieldGroup
              form={form}
              hookName="input.productTopicSubscribed"
              label={{
                content: t('common:productTopic'),
              }}
            />

            <FormCheckboxFieldGroup
              form={form}
              hookName="input.offerTopicSubscribed"
              label={{
                content: t('common:offerTopic'),
              }}
            />

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <Button
                type="submit"
                disabled={!form.formState.isValid || isLoading}
              >
                {isLoading ? t('common:submitting') : t('common:submit')}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  router.push(formFullPath(formPaths.subscriptionForm.list))
                }
                disabled={isLoading}
              >
                {t('common:back')}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default SubscriptionFormUpdateFormUI
