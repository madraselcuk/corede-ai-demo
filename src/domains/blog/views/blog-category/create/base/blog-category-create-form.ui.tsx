'use client'

import { BlogCategoryCreateFormContainerUIProps } from '../blog-category-create-form.container'
import { i18n } from '@/localization'

import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
import { Language } from '@common_package'
import { FormTranslatableTextFieldGroup } from '@/components/molecules/form-translatable-text-field/form-translatable-text-field'

export const BlogCategoryCreateFormUI = ({
  form,
  handleCreateBlogCategory,
  isLoading,
}: BlogCategoryCreateFormContainerUIProps) => {
  return (
    <>
      {/* Before Create BlogCategory */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateBlogCategory)}>
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

export default BlogCategoryCreateFormUI
