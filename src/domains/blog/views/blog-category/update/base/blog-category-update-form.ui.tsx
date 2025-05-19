'use client'

import { BlogCategoryUpdateFormContainerUIProps } from '../blog-category-update-form.container'
import { i18n } from '@/localization'
import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
export const BlogCategoryUpdateFormUI = ({
  form,
  handleUpdateBlogCategory,
  isLoading,
}: BlogCategoryUpdateFormContainerUIProps) => {
  return (
    <>
      {/* Before Update BlogCategory */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateBlogCategory)}>
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

export default BlogCategoryUpdateFormUI
