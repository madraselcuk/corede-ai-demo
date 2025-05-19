export interface PaginationProps {
  pageIndex: number
  pageSize: number
  pageCount: number
  totalRows?: number
  onPageChange: (newPage: number) => void
  onPageSizeChange: (newPageSize: number) => void
  // Feature toggle props
  showPageNumbers?: boolean // Show clickable page numbers
  showPageInput?: boolean // Show manual page input
  maxPageButtons?: number // Maximum number of page buttons to show (default: 5)
}

export const PAGE_SIZE_OPTIONS = [1, 5, 10, 50, 100]
