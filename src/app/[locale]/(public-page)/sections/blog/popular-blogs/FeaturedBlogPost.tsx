'use client'
import React from 'react'
import CategoryBadge from './CategoryBadge'
import Image from 'next/image'
import { IBlogListItemPublicResult } from '@/@package/corede'
import { format } from 'date-fns'

interface FeaturedBlogPostProps {
  blog: IBlogListItemPublicResult
}

const FeaturedBlogPost: React.FC<FeaturedBlogPostProps> = ({
  blog,
}) => {

  return (
    <article className="flex relative grow overflow-hidden rounded-2xl h-full w-full cursor-pointer hover:scale-101 transition-all duration-300">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={blog.image?.publicUrl ?? ''}
          alt="Featured Blog Post"
          fill
          className="rounded-2xl brightness-70 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 612px"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between w-full h-full p-6 md:p-8">
        <CategoryBadge
          category={blog.category.name}
          className="self-end px-4 py-2 text-base sm:text-lg md:text-xl font-medium leading-tight md:leading-7 text-center whitespace-nowrap rounded-xl border-secondary border-solid bg-white/10 backdrop-blur-sm border-[0.5px] text-slate-200 w-auto min-w-[100px] sm:min-w-[120px] md:min-w-[146px] dark:bg-white/10 dark:text-slate-200"
        />

        <div className="w-full text-white">
          <div className="text-base sm:text-lg md:text-xl font-medium leading-tight md:leading-7">
            {blog.author.name} · {format(blog.createdAt, 'dd MMM yyyy')}
          </div>

          <div className="mt-2 w-full border border-solid bg-white/10 border-white/10 min-h-px" />

          <h3 className="mt-2 w-full text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-10 text-white">
            {blog.title}
          </h3>
        </div>
      </div>
    </article>
  )
}

export default FeaturedBlogPost
