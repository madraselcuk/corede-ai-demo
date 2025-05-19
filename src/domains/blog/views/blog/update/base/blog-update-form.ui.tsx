'use client'

import { BlogUpdateFormContainerUIProps } from '../blog-update-form.container'
import { Form } from '@/components/ui/co/form'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field'
import { FormLanguageSelector } from '@/components/molecules/form-enum-selectors/form-language-selector'
import { FormAuthorSelector } from '@/domains/blog/components/form-author-selector/form-author-selector'
import { FormBlogCategorySelector } from '@/domains/blog/components/form-blog-category-selector/form-blog-category-selector'
import { FormBlogTargetCategorySelector } from '@/domains/blog/components/form-blog-target-category-selector/form-blog-target-category-selector'
import { useI18n } from '@/localization/hooks/useI18n'
import { ImageUpload } from '@/domains/file/component/upload-image/image.upload'
import { FormMultiChipSelector } from '@/components/molecules/form-multi-chip-selector/multi-chip-selector'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import RichTextEditor from '@/components/shared/RichTextEditor/RichTextEditor'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
// import { FormRichTextFieldGroup } from '@/components/molecules/form-rich-text-field'

export const BlogUpdateFormUIBase = ({
  form,
  handleUpdateBlog,
  isLoadingDetail,
  isUpdating,
  entityId,
  imageUrl,
  useImageCreateMutation,
  useImageAssignMutation,
  willAssign,
  hasThumbnail,
  connectionError,
  noDataError,
}: BlogUpdateFormContainerUIProps) => {
  const { t } = useI18n()

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    // TODO: add translation
    return <NoDataState text={'No Blog Found'} />
  }

  return (
    <>
      {/* Before Update Blog */}
      <div>
        <div className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] overflow-y-auto pr-2 sm:pr-4 space-y-4 sm:space-y-6">
          <ImageUpload
            currentImage={imageUrl}
            useImageCreateMutation={useImageCreateMutation}
            useImageAssignMutation={useImageAssignMutation}
            willAssign={willAssign}
            hasThumbnail={hasThumbnail}
            entityId={entityId}
          />

          <Form key="update-blog-form" {...form}>
            <form onSubmit={form.handleSubmit(handleUpdateBlog)}>
              {/* Title Field */}
              <FormTextFieldGroup
                form={form}
                hookName="input.title"
                label={{
                  content: t('blog:title'),
                }}
              />
              {/* Content Field */}
              {/* <FormRichTextFieldGroup
                form={form}
                hookName="input.content"
                label={{
                  content: t('blog:content'),
                }}
              /> */}

              <FormItem
                label={t('blog:content')}
                invalid={Boolean(form.formState.errors.input?.content)}
                errorMessage={form.formState.errors.input?.content?.message}
              >
                <Controller
                  name="input.content"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <RichTextEditor
                        key={field.value}
                        content={field.value || ''}
                        invalid={Boolean(form.formState.errors.input?.content)}
                        onChange={({ html }) => {
                          field.onChange(html)
                        }}
                      />
                    )
                  }}
                />
              </FormItem>

              {/* Description Field */}
              <FormTextFieldGroup
                form={form}
                hookName="input.description"
                label={{
                  content: t('blog:description'),
                }}
              />

              {/* ReadingTime Field */}
              <FormTextFieldGroup
                form={form}
                hookName="input.readingTime"
                label={{
                  content: t('blog:readingTime'),
                }}
              />

              {/* Tags Field */}
              <FormMultiChipSelector
                form={form}
                hookName="input.tags"
                label={{
                  content: t('blog:tags'),
                }}
                inputProps={{
                  defaultOptions: [],
                }}
              />

              {/*References Field */}
              <FormMultiChipSelector
                form={form}
                hookName="input.references"
                label={{
                  content: t('blog:references'),
                }}
                inputProps={{
                  defaultOptions: [],
                }}
              />

              {/*AuthorId Field */}
              <FormAuthorSelector form={form} />

              {/*Target CategoryId Field */}
              <FormBlogTargetCategorySelector form={form} />

              {/*CategoryId Field */}
              <FormBlogCategorySelector form={form} />

              {/* Language Field */}
              <FormLanguageSelector form={form} />

              {/* Submit CoButton */}
              {/* <Button
                type="submit"
                // onClick={() => {
                //   console.log('clicked')
                //   console.log(form.getValues())
                //   handleUpdateBlog(form.getValues())
                //   // form.handleSubmit(handleUpdateBlog)()
                // }}
                // disabled={!form.formState.isValid || isLoadingDetail || isUpdating}
              >
                {isUpdating ? 'Submitting...' : 'Submit'}
              </Button> */}
              {/* <div className="sticky bottom-0 left-0 right-0 z-10 mt-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 -mx-4 sm:-mx-8 py-4">
                <div className="max-w-[1200px] mx-auto">
                  <div className="flex items-center justify-between px-8">
                    <Button
                      className="ltr:mr-3 rtl:ml-3"
                      type="button"
                      variant="plain"
                      icon={<TbArrowNarrowLeft />}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <div className="flex items-center">
                      <Button
                        variant="solid"
                        type="submit"
                        loading={isLoadingDetail || isUpdating}
                      >
                        {t('common:update')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div> */}

              <ActionFooter
                backButton={{
                  noBack: true,
                }}
                mainAction={{
                  title: t('common:update'),
                  loading: isLoadingDetail || isUpdating,
                  onMainAction: () => {
                    console.log('clicked')
                    console.log(form.getValues())
                    handleUpdateBlog(form.getValues())
                  },
                }}
              />

              {/* <CoButton
                key="update-blog-button"
                type="button"
                // disabled={!form.formState.isValid}
                isLoading={isLoadingDetail || isUpdating}
                onClick={() => {
                  console.log('clicked')
                  console.log(form.getValues())
                  handleUpdateBlog(form.getValues())
                  // form.handleSubmit(handleUpdateBlog)()
                }}
              >
                {t('common:update')}
              </CoButton> */}
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}

export default BlogUpdateFormUIBase
