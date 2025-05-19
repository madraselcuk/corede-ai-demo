'use client'

import { DataTable } from "@/components/molecules/table/data-table/data-table"
import { BlogTargetCategoryListContainerUIProps } from "../blog-target-category-list.container"
import { Button } from "@/components/ui/co/button"

export const BlogTargetCategoryListTableUI = (
  props: BlogTargetCategoryListContainerUIProps
) => {
  return (
    <div className="container mx-auto py-10">
      <Button onClick={props.handleCreate}>Create</Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default BlogTargetCategoryListTableUI
