import { IDateFilter, IFilter } from '@/@package/common'
import { minHeaderSearchToolbarActivateLength } from '@/constants/table.constant'
import { SortingState } from '@tanstack/react-table'

export type SearchBarQueryParams = {
  searchFieldKey: string
  searchQuery?: string
  minLength?: number
}

export type DateRangeQueryParams = {
  dateRangeFieldKey: string
  dateRange?: IDateFilter
}

export type ITableHeaderToolbarQuery = {
  searchBarQueryParams?: SearchBarQueryParams
  dateRangeQueryParams?: DateRangeQueryParams
}

export const defaultTableHeaderToolbarQueryValues: Required<ITableHeaderToolbarQuery> =
  {
    searchBarQueryParams: {
      searchFieldKey: 'searchText',
      minLength: minHeaderSearchToolbarActivateLength,
    },
    dateRangeQueryParams: {
      dateRangeFieldKey: 'createdAtDateFilter',
    },
  }

export function filterFromTableHeaderToolbarQuery(
  params: ITableHeaderToolbarQuery,
): IFilter {
  return {
    ...(params.searchBarQueryParams
      ? filterFromSearchBarQuery(params.searchBarQueryParams)
      : {}),
    ...(params.dateRangeQueryParams
      ? filterFromDateRangeQuery(params.dateRangeQueryParams)
      : {}),
  }
}

/**
 * @description This function is used to check if the search query string is greater than the minimum length
 * and return the filter object generated using parameters
 * @param params.searchFieldKey - The field key to search
 * @param params.searchQuery - The search query string
 * @param params.minLength - The minimum length of the search query string
 * @returns The filter object
 */
export function filterFromSearchBarQuery(
  params: SearchBarQueryParams,
): IFilter {
  const minLength = params.minLength ?? minHeaderSearchToolbarActivateLength
  // Simply pass the search query string directly
  return params.searchQuery && params.searchQuery.length >= minLength
    ? { [params.searchFieldKey]: params.searchQuery }
    : {}
}

/**
 * @description This function is used to generate the filter object from the date range query params
 * @param params.dateRangeFieldKey - The field key to search
 * @param params.dateRange - The date range
 * @returns The filter object
 */
export function filterFromDateRangeQuery(
  params: DateRangeQueryParams,
): IFilter {
  return {
    [params.dateRangeFieldKey]: params.dateRange
      ? {
          from: params.dateRange.from?.toISOString(),
          to: params.dateRange.to?.toISOString(),
        }
      : undefined,
  }
}

/**
 * @description This function is used to sort the data table from the single column sorting
 * @param params.sorting - The sorting state
 * @returns The sort object
 */
export function sortFromSingleColumnSorting(params: {
  sorting?: SortingState
}): any {
  return params.sorting?.at(0)?.id
    ? {
        [params.sorting?.at(0)?.id ?? '']: params.sorting?.at(0)?.desc ? -1 : 1,
      }
    : undefined
}
