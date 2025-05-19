import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/co/button'
import { ArrowUpDown } from 'lucide-react'

interface TextColumnOptions {
  accessorKey: string
  header: string
  enableSorting?: boolean
  maxPreviewHeight?: number
}

export function getTextColumnDef<T>({
  accessorKey,
  header,
  enableSorting = false,
}: TextColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    enableSorting,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            enableSorting &&
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          {header}
          {enableSorting && <ArrowUpDown className="ml-2 size-4" />}
        </Button>
      )
    },
  }
}

export function getRichTextColumnDef<T>({
  accessorKey,
  header,
  enableSorting = false,
  maxPreviewHeight = 3,
}: TextColumnOptions): ColumnDef<T> {
  return {
    accessorKey,
    enableSorting,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            enableSorting &&
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          {header}
          {enableSorting && <ArrowUpDown className="ml-2 size-4" />}
        </Button>
      )
    },
    cell: ({ getValue }) => {
      const value = getValue() as string
      return (
        <div className="relative">
          <div
            className="prose prose-sm max-w-none dark:prose-invert overflow-hidden line-clamp-3"
            style={{ maxHeight: `${maxPreviewHeight}em` }}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      )
    },
  }
}
