import { BlogCreateFormContainerUIProps } from '../blog-create-form.container'
import { FormTextFieldGroup } from '@/components/molecules/form-text-field/form-text-field'
import { FormLanguageSelector } from '@/components/molecules/form-enum-selectors/form-language-selector'
import { Form } from '@/components/ui/co/form'
import { CoButton } from '@/components/atoms/button/button'
import { FormAuthorSelector } from '@/domains/blog/components/form-author-selector/form-author-selector'
import { FormBlogTargetCategorySelector } from '@/domains/blog/components/form-blog-target-category-selector/form-blog-target-category-selector'
import { FormBlogCategorySelector } from '@/domains/blog/components/form-blog-category-selector/form-blog-category-selector'
import { ImageChooser } from '@/domains/file/component/chooser-image/image.chooser'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormMultiChipSelector } from '@/components/molecules/form-multi-chip-selector/multi-chip-selector'
import { FormRichTextFieldGroup } from '@/components/molecules/form-rich-text-field/form-rich-text-field'

export const BlogCreateFormUIBase = ({
  form,
  handleBlogCreate,
  isLoading,
  fileSelected,
  isUploading,
}: BlogCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      {/* Before Create Blog */}
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleBlogCreate)}
            className="w-full"
          >
            <div className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] overflow-y-auto pr-2 sm:pr-4 space-y-4 sm:space-y-6">
              {/* Image Field */}
              <ImageChooser
                onImagePreprocess={fileSelected}
                isUploading={isUploading}
              />

              {/* Title Field */}
              <FormTextFieldGroup
                form={form}
                hookName="input.title"
                label={{
                  content: t('blog:title'),
                }}
              />

              {/* Content Field */}
              <FormRichTextFieldGroup
                form={form}
                hookName="input.content"
                label={{
                  content: t('blog:content'),
                }}
              />

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

              {/* References Field */}
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

              {/* AuthorId Field */}
              <FormAuthorSelector form={form} />

              {/* Target CategoryId Field */}
              <FormBlogTargetCategorySelector form={form} />

              {/* CategoryId Field */}
              <FormBlogCategorySelector form={form} />

              {/* Language Field */}
              <FormLanguageSelector form={form} />

              {/* Related Video Field */}
              <FormTextFieldGroup
                form={form}
                hookName="input.relatedVideo"
                label={{
                  content: t('blog:relatedVideo'),
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4 sm:mt-6 flex justify-end">
              <CoButton
                key="create-blog-button"
                type="submit"
                disabled={!form.formState.isValid}
                isLoading={isLoading || form.formState.isSubmitting}
              >
                {t('common:create')}
              </CoButton>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default BlogCreateFormUIBase
