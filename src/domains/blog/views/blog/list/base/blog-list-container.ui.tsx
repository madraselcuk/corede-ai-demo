'use client'

import { DataTable } from '@/components/molecules/table/data-table/data-table'
import { BlogListContainerUIProps } from '../blog-list.container'
import Button from '@/components/ui/Button'

export const BlogListContainerUI = (props: BlogListContainerUIProps) => {
  return (
    <div className="container mx-auto">
      <Button onClick={props.handleCreate}>Create</Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default BlogListContainerUI
