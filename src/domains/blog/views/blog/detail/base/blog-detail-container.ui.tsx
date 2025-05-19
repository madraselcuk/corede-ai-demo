'use client'

import { BlogDetailContainerUIProps } from '../blog-detail.container'
import { useI18n } from '@/localization/hooks/useI18n'
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'
import ReactHtmlParser from 'html-react-parser'
import Container from '@/components/shared/Container'
import Loading from '@/components/shared/Loading'
import MediaSkeleton from '@/components/shared/loaders/MediaSkeleton'
import TextBlockSkeleton from '@/components/shared/loaders/TextBlockSkeleton'
import Button from '@/components/ui/Button'
import { TbArrowNarrowLeft } from 'react-icons/tb'
import { blogFullPath } from '@/domains/blog/routes/blog.path'
import { useRouter } from 'next/navigation'
import { blogPaths } from '@/domains/blog/routes/blog.path'


export const BlogDetailContainerUIBase = ({
  blogDetailData,
  blogDetailIsLoading,
}: BlogDetailContainerUIProps) => {
  const { t } = useI18n()
  const router = useRouter()

  const handleBack = () => {
    router.push(blogFullPath(blogPaths.blog.list))
  }

  if (blogDetailIsLoading) {
    return (
      <Container>
        <div className="lg:flex gap-4">
          <div className="my-6 max-w-[800px] w-full mx-auto">
            <Loading
              loading
              customLoader={
                <div className="flex flex-col gap-8">
                  <MediaSkeleton />
                  <TextBlockSkeleton rowCount={6} />
                  <TextBlockSkeleton rowCount={4} />
                  <TextBlockSkeleton rowCount={8} />
                </div>
              }
            />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <>
      <Button
        className="ltr:mr-3 rtl:ml-3"
        type="button"
        variant="plain"
        icon={<TbArrowNarrowLeft />}
        onClick={handleBack}
      >
        Back
      </Button>

      <div className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] overflow-y-auto pr-2 sm:pr-4 space-y-4 sm:space-y-6">
        <>
          <h3>{blogDetailData?.title}</h3>
          {blogDetailData?.image?.publicUrl && (
            <img
              src={blogDetailData.image.publicUrl}
              alt={blogDetailData.title || 'Blog Image'}
              className="w-full h-auto mt-4"
            />
          )}
          <UsersAvatarGroup
            avatarProps={{ size: 40 }}
            users={
              blogDetailData?.author
                ? [
                    {
                      name: blogDetailData?.author?.name || '',
                      img: '',
                    },
                  ]
                : []
            }
          />
          <div className="text-xs">
            <div className="mb-1">
              {t('common:createdBy')}
              {': '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {blogDetailData?.author?.name}
              </span>
            </div>
            <div>
              <span>
                {t('common:lastUpdated')}
                {': '}
                {blogDetailData?.updatedAt?.toString()}
              </span>
              <span className="mx-2">•</span>
              <span>
                {blogDetailData?.readingTime} {t('blog:toRead')}
              </span>
              <span className="mx-2">•</span>
              <span>0 {t('blog:viewed')}</span>
            </div>
            <div className="mb-1">
              {t('blog:blogCategory')}
              {': '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {blogDetailData?.category?.name}
              </span>
            </div>
            <div className="mb-1">
              {t('blog:blogTargetCategory')}
              {': '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {blogDetailData?.targetCategory?.name}
              </span>
            </div>
            <div className="mb-1">
              {t('common:language')}
              {': '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {blogDetailData?.language}
              </span>
            </div>
            <div className="mb-1">
              {t('blog:relatedVideo')}
              {': '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {blogDetailData?.relatedVideo}
              </span>
            </div>
          </div>
          <div className="mt-8 prose dark:prose-invert max-w-none prose-p:mt-2 prose-headings:font-bold">
            {ReactHtmlParser(blogDetailData?.content || '')}
          </div>
        </>
      </div>
    </>
  )
}

export default BlogDetailContainerUIBase
