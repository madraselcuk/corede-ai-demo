'use client'

import { BlogTargetCategoryUpdateFormContainerUIProps } from '../blog-target-category-update-form.container'
import { i18n } from '@/localization'
import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
export const BlogTargetCategoryUpdateFormUIBase = ({
  form,
  handleUpdateBlogTargetCategory,
  isLoading,
}: BlogTargetCategoryUpdateFormContainerUIProps) => {
  return (
    <>
      {/* Before Update BlogTargetCategory */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateBlogTargetCategory)}>
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

            {/*TODO NameTranslation Field */}

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

export default BlogTargetCategoryUpdateFormUIBase
