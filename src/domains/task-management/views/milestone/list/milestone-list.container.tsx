import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { MilestoneFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { milestoneColumnDefs } from './milestone-list.columns'
import { i18n } from '@/localization'
import { MilestoneDeleteDialog } from '../../../components/milestone-delete-dialog/milestone-delete-dialog'
import MilestoneUpdateDrawer from '../update/base/milestone-update.drawer.base'
import { IMilestone } from '@corede_package'
import MilestoneAddDrawer from '../add/base/milestone-add.drawer.base'

export interface MilestoneListContainerUIProps {
  handleCreate?: () => void
  dataTableProps: DataTableProps<IMilestone, MilestoneFilters>
}

export interface MilestoneListContainerProps {
  projectId?: string
  milestones: IMilestone[]
  readonly children: (props: MilestoneListContainerUIProps) => JSX.Element
}

export const MilestoneListContainer = ({
  projectId,
  milestones,
  children,
}: MilestoneListContainerProps) => {
  console.log('milestones: ', milestones)

  if (!projectId) {
    return
  }

  // State management
  const [filters, setFilters] = useState<MilestoneFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'milestone-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'milestone-list-selected',
    [],
  )

  // Add state for actions
  const [milestoneForAction, setMilestoneForAction] = useState<
    IMilestone | undefined
  >(undefined)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])

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
  const handleEditClick = useCallback((milestone: IMilestone) => {
    setMilestoneForAction(milestone)
    setOpenUpdateDialog(true)
  }, [])

  const handleDeleteClick = useCallback((milestone: IMilestone) => {
    setMilestoneForAction(milestone)
    setDeleteDialogOpen(true)
  }, [])

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the FAQs list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const milestoneToDelete = milestones.find(
          (milestone) => milestone._id === selectedIds[0],
        )
        if (milestoneToDelete) {
          handleDeleteClick(milestoneToDelete)
        }
      }
    },
    [milestones, handleDeleteClick],
  )

  const handleRowClick = useCallback((milestone: IMilestone) => {
    console.log('row milestone: ', milestone)
    setMilestoneForAction(milestone)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        dataTableProps: {
          data: milestones ?? [],
          columns: milestoneColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((milestones.length ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: false,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: i18n.t(
                'milestone:milestoneSearchByQuestionPlaceholder',
              ),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <MilestoneAddDrawer
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setMilestoneForAction(undefined)
        }}
        projectId={projectId}
      />

      <MilestoneUpdateDrawer
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setMilestoneForAction(undefined)
        }}
        projectId={projectId}
        milestone={milestoneForAction}
      />

      <MilestoneDeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setMilestoneForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
        projectId={projectId}
        milestoneId={milestoneForAction?._id}
      />
    </>
  )
}

export default MilestoneListContainer
