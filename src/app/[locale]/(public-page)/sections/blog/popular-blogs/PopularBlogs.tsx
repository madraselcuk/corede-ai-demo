'use client'
import React, { useRef, useState, useEffect } from 'react'
import FeaturedBlogPost from './FeaturedBlogPost'
import BlogPostCard from './BlogPostCard'
import { BlogListPopularPublicContainerUIProps } from '@/domains/blog/views/blog/list-popular-public/blog-list-popular-public.func.container.'
import { useTranslations } from 'next-intl'
interface PopularBlogsProps extends BlogListPopularPublicContainerUIProps {}

const PopularBlogs: React.FC<PopularBlogsProps> = ({ blogListResult }) => {
  const t = useTranslations('pages.blog.popularBlogs')

  // Animasyon için görünürlük state'i
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // IntersectionObserver ile görünürlüğü takip et
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef}>
      <div className="flex flex-col items-center pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 rounded-xl max-w-7xl mx-auto">
        <div className="flex flex-col w-full">
          <header
            className={`flex gap-1.5 items-start self-start transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[-30px]'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal text-gray-900 dark:text-white leading-tight md:leading-[60px]">
              {t('title')}
            </h2>
            <div className="flex gap-2.5 items-center p-2 w-10 h-10 rounded-3xl min-h-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5061eb953199c9898a2fb4673b5ca448ba6f25aa?placeholderIfAbsent=true&apiKey=752829f2004942bd86b73ec754b79f5d"
                className={`object-contain self-stretch my-auto w-6 aspect-square ${
                  isVisible ? 'animate-pulse-slow' : ''
                }`}
                alt="Popular blogs icon"
              />
            </div>
          </header>

          <div className="mt-10 w-full">
            <div className="flex flex-col lg:flex-row gap-5">
              <div
                className={`w-full lg:w-6/12 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[-50px]'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <FeaturedBlogPost blog={blogListResult.data[0]} />
              </div>

              <div
                className={`w-full lg:w-6/12 mt-8 lg:mt-0 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[50px]'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="grow tracking-normal">
                  {blogListResult.data.slice(1, 4).map((blog, index) => (
                    <BlogPostCard
                      key={blog._id}
                      blog={blog}
                      showDivider={index !== 2}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularBlogs
