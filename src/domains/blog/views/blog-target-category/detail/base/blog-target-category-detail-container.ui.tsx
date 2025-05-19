'use client'

import { BlogTargetCategoryDetailContainerUIProps } from "../blog-target-category-detail.container"
import { i18n } from "@/localization"

export const BlogTargetCategoryDetailContent = ({
  blogTargetCategoryDetailData,
  blogTargetCategoryDetailIsLoading
}: BlogTargetCategoryDetailContainerUIProps) => {
  if (blogTargetCategoryDetailIsLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{i18n.t("common:name")}: </b>
        </div>
        <div>{blogTargetCategoryDetailData?.name}</div>
        <div>
          <b>{i18n.t("common:icon")}: </b>
        </div>
        <div>{blogTargetCategoryDetailData?.icon}</div>
      </div>
    </div>
  )
}

export default BlogTargetCategoryDetailContent
