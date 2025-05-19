import { IBaseHeaderToolbarFilter } from "@/components/molecules/table/data-table/header-toolbar/table-header-toolbar"

export interface TaskFilters extends IBaseHeaderToolbarFilter {
  searchQuery?: string
  searchText?: string
}
