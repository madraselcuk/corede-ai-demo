'use client'

import { AuthorCreateFormContainerUIProps } from '../author-create-form.container'
import { i18n } from '@/localization'
import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
export const AuthorCreateFormUIBase = ({
  form,
  handleAuthorCreate,
  isLoading,
}: AuthorCreateFormContainerUIProps) => {
  return (
    <>
      {/* Before Create Author */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAuthorCreate)}>
            {/* Name Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.name"
              label={{
                content: i18n.t('common:name'),
              }}
            />

            {/* Bio Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.bio"
              label={{
                content: i18n.t('blog:bio'),
              }}
            />

            {/* Facebook Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.facebook"
              label={{
                content: i18n.t('blog:facebook'),
              }}
            />

            {/* Instagram Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.instagram"
              label={{
                content: i18n.t('blog:instagram'),
              }}
            />

            {/* LinkedIn Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.linkedIn"
              label={{
                content: i18n.t('blog:linkedIn'),
              }}
            />

            {/* X Field */}
            <FormTextFieldGroup
              form={form}
              hookName="input.x"
              label={{
                content: i18n.t('blog:x'),
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

export default AuthorCreateFormUIBase
