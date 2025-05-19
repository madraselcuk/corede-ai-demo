import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/co/select'
import { Button } from '@/components/ui/co/button'
import { Input } from '@/components/ui/co/input'
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { PAGE_SIZE_OPTIONS, PaginationProps } from './pagination.props'
import { cn } from '@/utils/css-class-name.utility'

export function Pagination({
  pageIndex,
  pageSize,
  pageCount,
  totalRows,
  onPageChange,
  onPageSizeChange,
  showPageNumbers = true,
  showPageInput = true,
  maxPageButtons = 5,
}: PaginationProps) {
  const [pageInputValue, setPageInputValue] = useState('')

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const halfMax = Math.floor(maxPageButtons / 2)

    let start = Math.max(0, pageIndex - halfMax)
    const end = Math.min(pageCount - 1, start + maxPageButtons - 1)

    // Adjust start if we're near the end
    if (end - start + 1 < maxPageButtons) {
      start = Math.max(0, end - maxPageButtons + 1)
    }

    // Add first page
    if (start > 0) {
      pages.push(0)
      if (start > 1) pages.push('...')
    }

    // Add page numbers
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    // Add last page
    if (end < pageCount - 1) {
      if (end < pageCount - 2) pages.push('...')
      pages.push(pageCount - 1)
    }

    return pages
  }

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const page = parseInt(pageInputValue) - 1
    if (!isNaN(page) && page >= 0 && page < pageCount) {
      onPageChange(page)
      setPageInputValue('')
    }
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 px-2 md:flex-row">
      <div className="w-full md:w-48 text-center md:text-left text-muted-foreground text-sm order-3  md:order-1">
        {totalRows !== undefined && `${totalRows} row(s) selected.`}
      </div>

      <div className="flex items-center space-x-2 order-1  md:order-2">
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => onPageChange(0)}
          disabled={pageIndex === 0}
        >
          <ChevronFirst className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
        >
          <ChevronLeft className="size-4" />
        </Button>

        {showPageNumbers && (
          <div className="hidden items-center space-x-1 md:flex">
            {getPageNumbers().map((page, idx) =>
              typeof page === 'number' ? (
                <Button
                  key={idx}
                  variant={pageIndex === page ? 'default' : 'outline'}
                  size="sm"
                  className="size-8 rounded-lg"
                  onClick={() => onPageChange(page)}
                >
                  {page + 1}
                </Button>
              ) : (
                <span key={idx} className="px-1">
                  {page}
                </span>
              ),
            )}
          </div>
        )}

        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex === pageCount - 1}
        >
          <ChevronRight className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => onPageChange(pageCount - 1)}
          disabled={pageIndex === pageCount - 1}
        >
          <ChevronLast className="size-4" />
        </Button>

        {showPageInput && (
          <form
            onSubmit={handlePageInputSubmit}
            className="flex items-center space-x-2"
          >
            <Input
              type="number"
              min="1"
              max={pageCount}
              value={pageInputValue}
              onChange={(e) => setPageInputValue(e.target.value)}
              className={cn(
                'h-8 w-8 focus:outline-none bg-gray-100 dark:bg-gray-700 rounded-lg text-center',
                '[-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
              )}
              placeholder={`${pageIndex + 1}`}
            />
            <span className="text-sm">of {pageCount}</span>
          </form>
        )}
      </div>

      <div className="w-full md:w-48  flex items-center justify-center md:justify-end order-1 md:order-3">
        <span className="text-sm font-medium">Rows per page</span>
        <Select
          value={pageSize.toString()}
          onValueChange={(value) => onPageSizeChange(Number(value))}
        >
          <SelectTrigger className="h-8 bg-gray-100 dark:bg-gray-700 pl-2 pr-0.5">
            <SelectValue placeholder={pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {PAGE_SIZE_OPTIONS.map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
