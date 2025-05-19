'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IOrganizationListItemResult } from '@corede_package'
import { OrganizationFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { organizationColumnDefs } from './organization-list.columns'
import { useOrganizationListQuery } from '@/@package/api/domains/user/organization'
import { OrganizationDeleteDialog } from '@/domains/user/components/organization-delete-dialog/organization-delete-dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import { sortFromSingleColumnSorting } from '@/utils/data-table.util'
import { filterFromTableHeaderToolbarQuery } from '@/utils/data-table.util'
import { OrganizationCreateDialog } from '../create'
import { OrganizationDetailDialog } from '../detail'
import { OrganizationUpdateDialog } from '../update'

export interface OrganizationListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<IOrganizationListItemResult, OrganizationFilters>
}

export interface OrganizationListContainerProps {
  readonly children: (props: OrganizationListContainerUIProps) => JSX.Element
}

export const OrganizationListContainer = ({ children }: OrganizationListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [organizationForAction, setOrganizationForAction] = useState<
    IOrganizationListItemResult | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<OrganizationFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'organization-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'organization-list-selected',
    [],
  )

  // Prepare variables for GraphQL query
  const variables = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        sort: sortFromSingleColumnSorting({ sorting }), // Add single column sorting configuration
      },
      filter: filterFromTableHeaderToolbarQuery({
        searchBarQueryParams: {
          searchFieldKey: 'name',
          searchQuery: filters.searchQuery,
        },
        dateRangeQueryParams: {
          dateRangeFieldKey: 'createdAtDateFilter',
          dateRange: filters.dateRange,
        },
      }),
    },
  }

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])

  // queries
  const {
    data: organizationListData,
    isLoading: organizationListIsLoading,
    error: organizationListError,
  } = useOrganizationListQuery(variables)

  useEffect(() => {
    if (organizationListError) {
      setNoConnectionError(true)
    }
  }, [organizationListError, t])

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
  const handleEditClick = useCallback((organization: IOrganizationListItemResult) => {
    setOrganizationForAction(organization)
    setOpenUpdateDialog(true)
  }, [])

  const handleDeleteClick = useCallback((organization: IOrganizationListItemResult) => {
    setOrganizationForAction(organization)
    setDeleteDialogOpen(true)
  }, [])

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the Organizations list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const organizationToDelete = organizationListData?.data.find(
          (organization) => organization._id === selectedIds[0],
        )
        if (organizationToDelete) {
          handleDeleteClick(organizationToDelete)
        }
      }
    },
    [organizationListData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback((organization: IOrganizationListItemResult) => {
    setOrganizationForAction(organization)
    setOpenDetailDialog(true)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        noConnectionError,
        dataTableProps: {
          data: organizationListData?.data ?? [],
          columns: organizationColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((organizationListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: organizationListIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('user:organizationSearchByNamePlaceholder'),
            },
            dateRange: {
              enabled: true,
              placeholder: t('user:organizationListDateRangePlaceholder'),
            },
          },
        },
      })}

      <OrganizationDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setOrganizationForAction(undefined)
        }}
        organizationId={organizationForAction?._id}
      />

      <OrganizationCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setOrganizationForAction(undefined)
        }}
      />

      <OrganizationUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setOrganizationForAction(undefined)
        }}
        organizationId={organizationForAction?._id}
      />

      <OrganizationDeleteDialog
        organizationId={organizationForAction?._id ?? ''}
        organizationName={''}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setOrganizationForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default OrganizationListContainer
