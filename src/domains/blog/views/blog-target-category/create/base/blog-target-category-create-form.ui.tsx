'use client'

import { BlogTargetCategoryCreateFormContainerUIProps } from '../blog-target-category-create-form.container'
import { i18n } from '@/localization'

import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
import { Language } from '@common_package'
import { FormTranslatableTextFieldGroup } from '@/components/molecules/form-translatable-text-field/form-translatable-text-field'

export const BlogTargetCategoryCreateFormUI = ({
  form,
  handleCreateBlogTargetCategory,
  isLoading,
}: BlogTargetCategoryCreateFormContainerUIProps) => {
  return (
    <>
      {/* Before Create BlogTargetCategory */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateBlogTargetCategory)}>
            {/* Name Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.name"
              label={{
                content: i18n.t('common:name'),
              }}
            />

            {/* Icon Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.icon"
              label={{
                content: i18n.t('common:icon'),
              }}
            />

            {/* NameTranslation Field */}
            <FormTranslatableTextFieldGroup
              form={form}
              hookName="input.nameTranslation"
              label={{
                content: i18n.t('common:translations'),
              }}
              inputProps={{
                supportedLanguages: [Language.en, Language.tr],
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              // loading={!isLoading} // TODO
            >
              {isLoading || form.formState.isSubmitting
                ? 'Submitting in...'
                : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default BlogTargetCategoryCreateFormUI
