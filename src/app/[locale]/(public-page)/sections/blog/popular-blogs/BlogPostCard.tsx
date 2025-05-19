"use client";
import React from "react";
import CategoryBadge from "./CategoryBadge";
import ReadTimeIndicator from "./ReadTimeIndicator";
import { IBlogListItemPublicResult } from "@/@package/corede";
import { format } from "date-fns";

interface BlogPostCardProps {
  blog: IBlogListItemPublicResult;
  showDivider?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  blog,
  showDivider = false,

}) => {
  return (
    <article className={`w-full`}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 w-full cursor-pointer hover:scale-102 transition duration-300">
        <div className="relative w-full sm:w-[120px] md:w-[150px] lg:w-[200px] aspect-[1.7] lg:aspect-[1.11] rounded-xl overflow-hidden">
          {blog.image?.publicUrl && <img
            src={blog.image.publicUrl}
            className="object-cover w-full h-full rounded-xl"
            alt={blog.title}
          />}
        </div>
        <div className="flex flex-col grow shrink basis-0 min-w-0">
          <div className="w-full">
            <p className="text-sm sm:text-base font-medium leading-tight sm:leading-6 text-gray-500 dark:text-slate-400">
              {blog.author.name} · {format(blog.createdAt, 'dd MMM yyyy')}
            </p>
            <div className="w-full mt-2">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight sm:leading-8 text-gray-900 dark:text-white line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm sm:text-base font-medium leading-tight sm:leading-6 text-gray-600 dark:text-slate-400 mt-1 sm:mt-2 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center mt-3 sm:mt-4 font-medium">
            <CategoryBadge
              category={blog.category.name}
              className="gap-2.5 px-3 sm:px-4 py-1 text-base sm:text-lg md:text-xl leading-tight sm:leading-7 text-center whitespace-nowrap rounded-md bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-slate-200 w-auto"
            />
            <ReadTimeIndicator readTime={blog.readingTime} />
          </div>
        </div>
      </div>

      {showDivider && (
        <div className="my-2 sm:my-3 w-full min-h-0 border border-solid bg-gray-200 dark:bg-white/10 border-gray-200 dark:border-white/10 dark:border-opacity-10" />
      )}
    </article>
  );
};

export default BlogPostCard;
