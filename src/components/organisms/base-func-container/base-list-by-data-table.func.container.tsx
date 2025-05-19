/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback, useEffect, useState } from 'react'
import { BaseQueryFn, TypedUseQuery } from '@reduxjs/toolkit/query/react'
import { useI18n } from '@/localization/hooks/useI18n'
import { AllTranslationKeys } from '@/localization/types'
import {
  IEntity,
  IFilter,
  IGraphqlVariables,
  IHasFilter,
  IHasPagination,
  IPaginated,
  IPagination,
} from '@common_package'
import {
  IBaseHeaderToolbarFilter,
  OptionalTableHeaderToolbarProps,
} from '@/components/molecules/table/data-table/header-toolbar/table-header-toolbar'
import { useLocalStorage } from '@/hooks'
import { SortingState } from '@tanstack/react-table'
import {
  defaultTableHeaderToolbarQueryValues,
  filterFromTableHeaderToolbarQuery,
  ITableHeaderToolbarQuery,
  sortFromSingleColumnSorting,
} from '@/utils/data-table.util'
import {
  CommonEntityColumnDefsFunc,
  CommonListByDataTableFuncContainerProps,
} from '@/@types/common.func.containers'
import { EntityActionViews } from '@/components/interface'

/**
 * Base props for a list by data table functional container.
 *
 * @template TListItemResult - The type of the list item result.
 * @template TInputFilter - The type of the input filter.
 * @template TTableFilter - The type of the table filter that can be different from the input filter that is used to query from backend.
 * @template TInput - The type of the input.
 */
export interface BaseListByDataTableFuncContainerProps<
  TListItemResult extends IEntity,
  TInputFilter extends IFilter,
  TTableFilter extends IBaseHeaderToolbarFilter,
  TInput extends IGraphqlVariables<
    IHasPagination<IPagination> & IHasFilter<TInputFilter>
  >,
> extends CommonListByDataTableFuncContainerProps<
    TListItemResult,
    TTableFilter
  > {
  entityName: {
    translationKey?: AllTranslationKeys
    value: string
  }
  entityColumnDefs: CommonEntityColumnDefsFunc<TListItemResult>
  useEntityListQuery: TypedUseQuery<
    IPaginated<TListItemResult>,
    TInput,
    BaseQueryFn
  >
  headerToolbarParams?: ITableHeaderToolbarQuery &
    OptionalTableHeaderToolbarProps<TTableFilter>
  entityActionViews?: EntityActionViews
}

export const BaseListByDataTableFuncContainer = <
  TListItemResult extends IEntity,
  TInputFilter extends IFilter,
  TTableFilter extends IBaseHeaderToolbarFilter,
  TInput extends IGraphqlVariables<IHasPagination & IHasFilter<TInputFilter>>,
>({
  entityName,
  useEntityListQuery,
  children,
  entityColumnDefs,
  onListError,
  headerToolbarParams,
  entityActionViews,
}: BaseListByDataTableFuncContainerProps<
  TListItemResult,
  TInputFilter,
  TTableFilter,
  TInput
>) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [entityForAction, setEntityForAction] = useState<
    TListItemResult | undefined
  >(undefined)
  const [isDeleteViewOpen, setIsDeleteViewOpen] = useState(false)
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false)
  const [isCreateViewOpen, setIsCreateViewOpen] = useState(false)
  const [isUpdateViewOpen, setIsUpdateViewOpen] = useState(false)

  const [filters, setFilters] = useState<TTableFilter>()
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    `${entityName.value}-list-sorting`,
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    `${entityName.value}-list-selected`,
    [],
  )

  // Prepare variables for GraphQL query
  const variables: TInput = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        sort: sortFromSingleColumnSorting({ sorting }), // Add single column sorting configuration
      },
      filter: filterFromTableHeaderToolbarQuery({
        searchBarQueryParams: {
          searchFieldKey:
            headerToolbarParams?.searchBarQueryParams?.searchFieldKey ??
            defaultTableHeaderToolbarQueryValues.searchBarQueryParams
              .searchFieldKey,
          searchQuery: filters?.searchQuery,
          minLength:
            headerToolbarParams?.searchBarQueryParams?.minLength ??
            defaultTableHeaderToolbarQueryValues.searchBarQueryParams.minLength,
        },
        dateRangeQueryParams: {
          dateRangeFieldKey:
            headerToolbarParams?.dateRangeQueryParams?.dateRangeFieldKey ??
            defaultTableHeaderToolbarQueryValues.dateRangeQueryParams
              .dateRangeFieldKey,
          dateRange: filters?.dateRange,
        },
      }),
    },
  } as TInput

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])

  // queries
  const {
    data: entityListData,
    isLoading: entityListIsLoading,
    error: entityListError,
    refetch,
    isFetching
  } = useEntityListQuery(variables)

  useEffect(() => {
    if (entityListError) {
      setNoConnectionError(true)
      onListError?.(entityListError)
    }
  }, [entityListError, t, onListError])

  const handlePaginationChange = useCallback(
    (pageIndex: number, pageSize: number) => {
      setPageIndex(pageIndex)
      setPageSize(pageSize)
    },
    [],
  )

  const handleClearSelection = useCallback(() => {
    setSelectedRows([])
  }, [setSelectedRows])

  // Add handlers
  const handleEditClick = useCallback((entity: TListItemResult) => {
    setEntityForAction(entity)
    setIsUpdateViewOpen(true)
  }, [])

  const handleDeleteClick = useCallback((entity: TListItemResult) => {
    setEntityForAction(entity)
    setIsDeleteViewOpen(true)
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const entityToDelete = entityListData?.data.find(
          (entity) => entity._id === selectedIds[0],
        )
        if (entityToDelete) {
          handleDeleteClick(entityToDelete)
        }
      }
    },
    [entityListData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback((entity: TListItemResult) => {
    setEntityForAction(entity)
    setIsDetailViewOpen(true)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {
          setIsCreateViewOpen(true)
        },
        noConnectionError,
        dataTableProps: {
          handleRefresh: () => {
            refetch()
          },
          data: entityListData?.data ?? [],
          columns: entityColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((entityListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: entityListIsLoading || isFetching,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: headerToolbarParams?.search?.enabled ?? true,
              placeholder: headerToolbarParams?.search?.placeholder,
            },
            dateRange: {
              enabled: headerToolbarParams?.dateRange?.enabled ?? true,
              placeholder: headerToolbarParams?.dateRange?.placeholder,
            },
          },
        },
      })}

      {entityActionViews?.detail && (
        <entityActionViews.detail
          entityId={entityForAction?._id ?? ''}
          isOpen={isDetailViewOpen}
          onClose={() => {
            setIsDetailViewOpen(false)
            setEntityForAction(undefined)
          }}
        />
      )}

      {entityActionViews?.create && (
        <entityActionViews.create
          isOpen={isCreateViewOpen}
          onClose={() => {
            setIsCreateViewOpen(false)
            setEntityForAction(undefined)
          }}
        />
      )}

      {entityActionViews?.update && (
        <entityActionViews.update
          entityId={entityForAction?._id ?? ''}
          isOpen={isUpdateViewOpen}
          onClose={() => {
            setIsUpdateViewOpen(false)
            setEntityForAction(undefined)
          }}
        />
      )}

      {entityActionViews?.delete && (
        <entityActionViews.delete
          entityId={entityForAction?._id ?? ''}
          isOpen={isDeleteViewOpen}
          onClose={() => {
            setIsDeleteViewOpen(false)
            setEntityForAction(undefined)
          }}
        />
      )}
    </>
  )
}
