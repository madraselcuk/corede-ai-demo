'use client'

import { AuthorUpdateFormContainerUIProps } from '../author-update-form.container'
import { i18n } from '@/localization'
import { Form } from '@/components/ui/co/form'
import { Button } from '@/components/ui/co/button'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { useRouter } from 'next/navigation'
import { blogFullPath, blogPaths } from '@/domains/blog/routes/blog.path'

export const AuthorUpdateFormUIBase = ({
  form,
  handleUpdateAuthor,
  isLoading,
  connectionError,
  noDataError,
}: AuthorUpdateFormContainerUIProps) => {
  const router = useRouter()

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={i18n.t('blog:noAuthorFound')} />
  }

  return (
    <>
      {/* Before Update Author */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateAuthor)}>
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

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <Button
                type="submit"
                disabled={!form.formState.isValid || isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  router.push(blogFullPath(blogPaths.author.list))
                }
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default AuthorUpdateFormUIBase
