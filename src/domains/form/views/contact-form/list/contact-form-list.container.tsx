'use client'

import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { IGraphqlVariables } from '@common_package'
import {
  IContactFormListInput,
  IContactFormListItemResult,
} from '@corede_package'
import { ContactFormDeleteDialog } from '../../../components/contact-form-delete-dialog/contact-form-delete-dialog'
import { ContactFormFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { contactFormColumnDefs } from './contact-form-list.columns'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import ContactFormDetailDialog from '../detail/base/contact-form-detail.dialog'
import ContactFormCreateDialog from '../create/base/contact-form-create.dialog'
import ContactFormUpdateDialog from '../update/base/contact-form-update.dialog'
import { useI18n } from '@/localization/hooks/useI18n'
import {
  filterFromTableHeaderToolbarQuery,
  sortFromSingleColumnSorting,
} from '@/utils/data-table.util'
import { useContactFormListQuery } from '@/domains/form/api'

export interface ContactFormListContainerUIProps {
  handleCreate?: () => void
  noConnectionError?: boolean
  dataTableProps: DataTableProps<IContactFormListItemResult, ContactFormFilters>
}

export interface ContactFormListContainerProps {
  readonly children: (props: ContactFormListContainerUIProps) => JSX.Element
}

export const ContactFormListContainer = ({
  children,
}: ContactFormListContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [contactFormForAction, setContactFormForAction] = useState<
    IContactFormListItemResult | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  const [filters, setFilters] = useState<ContactFormFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'contactForm-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'contactForm-list-selected',
    [],
  )

  // Prepare variables for GraphQL query
  const variables: IGraphqlVariables<IContactFormListInput> = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        sort: sortFromSingleColumnSorting({ sorting }), // Add single column sorting configuration
      },
      filter: filterFromTableHeaderToolbarQuery({
        searchBarQueryParams: {
          searchFieldKey: 'email',
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

  // Use the existing query hook
  const {
    data: contactFormListData,
    isLoading: contactFormListIsLoading,
    error: contactFormListError,
  } = useContactFormListQuery(variables)

  // use effect
  useEffect(() => {
    if (contactFormListError) {
      setNoConnectionError(true)
    }
  }, [contactFormListError])

  const handlePaginationChange = useCallback(
    (newPageIndex: number, newPageSize: number) => {
      setPageIndex(newPageIndex)
      setPageSize(newPageSize)
    },
    [],
  )

  const handleExportClick = useCallback((selectedIds: string[]) => {
    console.log('Export:', selectedIds)
    toast.push(
      <Notification
        title={`Export action for ${selectedIds.length} items`}
        type="success"
      >
        We have sent you an email to reset your password
      </Notification>,
    )
  }, [])

  const handleClearSelection = useCallback(() => {
    setSelectedRows([])
  }, [setSelectedRows])

  // Handle edit action
  const handleEditClick = useCallback(
    (contactForm: IContactFormListItemResult) => {
      setContactFormForAction(contactForm)
      setOpenUpdateDialog(true)
    },
    [],
  )

  // Handle delete action
  const handleDeleteClick = useCallback(
    (contactForm: IContactFormListItemResult) => {
      setContactFormForAction(contactForm)
      setDeleteDialogOpen(true)
    },
    [],
  )

  // Handle successful deletion
  const handleDeleteSuccess = useCallback(() => {
    // Refetch the contactForms list
    // The query will automatically refetch if you've set up proper cache invalidation
  }, [])

  // Add this new handler for bulk delete
  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      // For now, just handle the first selected item
      if (selectedIds.length > 0) {
        const contactFormToDelete = contactFormListData?.data.find(
          (contactForm) => contactForm._id === selectedIds[0],
        )
        if (contactFormToDelete) {
          handleDeleteClick(contactFormToDelete)
        }
      }
    },
    [contactFormListData?.data, handleDeleteClick],
  )

  // Add this handler for row clicks
  const handleRowClick = useCallback(
    (contactForm: IContactFormListItemResult) => {
      // console.log("Navigating to:", `/blog/contactForm-detail/${contactForm._id}`)
      // navigate(`/blog/contactForm-detail/${contactForm._id}`)
      setContactFormForAction(contactForm)
      setOpenDetailDialog(true)
    },
    // [navigate]
    [],
  )

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        noConnectionError,
        dataTableProps: {
          data: contactFormListData?.data ?? [],
          columns: contactFormColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((contactFormListData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: contactFormListIsLoading,
          onDelete: handleBulkDelete,
          onExport: handleExportClick,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: t('form:contactFormListSearchPlaceholder'),
            },
            dateRange: {
              enabled: true,
              placeholder: t('form:contactFormListDateRangePlaceholder'),
            },
          },
        },
      })}

      {/* <ContactFormDetailDrawer */}
      <ContactFormDetailDialog
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setContactFormForAction(undefined)
        }}
        contactFormId={contactFormForAction?._id}
      />

      {/* <ContactFormCreateDrawer */}
      <ContactFormCreateDialog
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setContactFormForAction(undefined)
        }}
      />

      {/* <ContactFormUpdateDrawer */}
      <ContactFormUpdateDialog
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setContactFormForAction(undefined)
        }}
        contactFormId={contactFormForAction?._id}
      />

      <ContactFormDeleteDialog
        contactFormId={contactFormForAction?._id ?? ''}
        contactFormName={contactFormForAction?.fullName ?? ''}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setContactFormForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default ContactFormListContainer
