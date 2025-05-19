import { IBaseHeaderToolbarFilter } from '@/components/molecules/table/data-table/header-toolbar/table-header-toolbar'

export interface MilestoneFilters extends IBaseHeaderToolbarFilter {
  searchQuery?: string
  searchText?: string
}
