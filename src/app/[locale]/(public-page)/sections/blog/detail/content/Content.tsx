import React from 'react'
import { BlogDetailPublicContainerUIProps } from '@/domains/blog/views/blog/detail-public/blog-detail-public.func.container'
import Loading from '@/components/shared/Loading'
import parse from 'html-react-parser'

interface IContentProps extends BlogDetailPublicContainerUIProps {}

const Content: React.FC<IContentProps> = ({
  blogDetailResult,
  blogDetailIsLoading,
}: IContentProps) => {
  return (
    <section
      className="px-20 py-12 mt-5 w-full text-xl leading-7 text-justify rounded-3xl
     bg-white/90 dark:bg-white/10 max-w-[1256px] text-slate-800 dark:text-slate-200 max-md:px-16 max-md:py-10 max-md:text-lg 
     max-md:leading-7 max-sm:px-12 max-sm:py-8 max-sm:text-base max-sm:leading-6
     "
    >
      {blogDetailIsLoading ? (
        <Loading loading={blogDetailIsLoading} />
      ) : (
        parse(blogDetailResult?.content ?? '')
      )}
    </section>
  )
}

export default Content
