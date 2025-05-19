import { IBaseHeaderToolbarFilter } from "@/components/molecules/table/data-table/header-toolbar/table-header-toolbar"

export interface ProjectFilters extends IBaseHeaderToolbarFilter {
  searchQuery?: string
  categoryId?: string
  language?: string
}
