'use client'

import Link from 'next/link'
import React from 'react'
import { useLocale } from 'next-intl'

interface CategoryCardProps {
  title: string
  imageUrl: string
  imageAlt: string
  isReversed?: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  imageAlt,
  isReversed = false,
}) => {
  const locale = useLocale()

  const titleBox = (
    <Link
      href={`/${locale}/blog#${title}`}
      className="box-border px-4 lg:px-8 py-11 w-full text-xl lg:text-3xl text-center font-bold 
      leading-10 text-white rounded-xl border border-solid bg-white bg-opacity-10
       border-white border-opacity-10 h-[130px] max-sm:px-5 max-sm:py-8 max-sm:leading-8 
       max-sm:h-[100px] dark:text-white dark:bg-slate-900 dark:bg-opacity-10 dark:border-slate-800"
    >
      {title}
    </Link>
  )

  const imageBox = (
    <div className="overflow-hidden w-full rounded-md h-[323px] max-sm:h-[250px]">
      <img
        src={imageUrl}
        className="object-cover rounded-xl size-full"
        alt={imageAlt}
      />
    </div>
  )

  return (
    <article className="flex flex-col gap-4 items-center w-[148px] lg:w-[296px]">
      {isReversed ? (
        <>
          {imageBox}
          {titleBox}
        </>
      ) : (
        <>
          {titleBox}
          {imageBox}
        </>
      )}
    </article>
  )
}

export default CategoryCard
