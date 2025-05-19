import { useState, useCallback, useEffect, JSX } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { TaskFilters } from './types'
import { SortingState } from '@tanstack/react-table'
import { DataTableProps } from '@/components/molecules/table/data-table/data-table.props'
import { taskColumnDefs } from './task-list.columns'
import { i18n } from '@/localization'
import { TaskDeleteDialog } from '../../../components/task-delete-dialog/task-delete-dialog'
import TaskDetailDrawer from '../detail/base/task-detail.drawer.base'
import TaskCreateDrawer from '../create/base/task-create.drawer.base'
import TaskUpdateDrawer from '../update/base/task-update.drawer.base'
import { ITaskResult } from '@corede_package'
import { useTaskListQuery } from '@/domains/task-management/api'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'

export interface TaskListContainerUIProps {
  handleCreate?: () => void
  dataTableProps: DataTableProps<ITaskResult, TaskFilters>
}

export interface TaskListContainerProps {
  readonly children: (props: TaskListContainerUIProps) => JSX.Element
}

export const TaskListContainer = ({ children }: TaskListContainerProps) => {
  // State management
  const [filters, setFilters] = useState<TaskFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    'task-list-sorting',
    undefined,
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    'task-list-selected',
    [],
  )

  // Add state for actions
  const [taskForAction, setTaskForAction] = useState<ITaskResult | undefined>(
    undefined,
  )
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)

  // Prepare variables for GraphQL query
  const variables = {
    input: {
      pagination: {
        page: pageIndex + 1, // Convert to 1-based index
        pageSize,
        sort: sorting?.at(0)?.id
          ? {
              [sorting?.at(0)?.id ?? '']: sorting?.at(0)?.desc ? -1 : 1,
            }
          : undefined,
      },
      filter: filters.searchQuery
        ? { question: filters.searchQuery }
        : undefined,
    },
  }

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])

  // queries
  const {
    data: tasksData,
    isLoading: tasksIsLoading,
    error: tasksError,
  } = useTaskListQuery(variables)

  useEffect(() => {
    if (tasksError) {
      toast.push(
        // TODO: add error message translation
        <Notification title="Error loading tasks" type="danger">
          Error loading tasks
        </Notification>,
      )
    }
  }, [tasksError])

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
  const handleEditClick = useCallback((task: ITaskResult) => {
    setTaskForAction(task)
    setOpenUpdateDialog(true)
  }, [])

  const handleDeleteClick = useCallback((task: ITaskResult) => {
    setTaskForAction(task)
    setDeleteDialogOpen(true)
  }, [])

  const handleDeleteSuccess = useCallback(() => {
    // Refetch the FAQs list
  }, [])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const taskToDelete = tasksData?.data.find(
          (task) => task._id === selectedIds[0],
        )
        if (taskToDelete) {
          handleDeleteClick(taskToDelete)
        }
      }
    },
    [tasksData?.data, handleDeleteClick],
  )

  const handleRowClick = useCallback((task: ITaskResult) => {
    setTaskForAction(task)
    setOpenDetailDialog(true)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        dataTableProps: {
          data: tasksData?.data ?? [],
          columns: taskColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick,
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((tasksData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: tasksIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: i18n.t('task:taskSearchByQuestionPlaceholder'),
            },
            dateRange: {
              enabled: false,
            },
          },
        },
      })}

      <TaskDetailDrawer
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setTaskForAction(undefined)
        }}
        taskId={taskForAction?._id}
      />

      <TaskCreateDrawer
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setTaskForAction(undefined)
        }}
      />

      <TaskUpdateDrawer
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setTaskForAction(undefined)
        }}
        taskId={taskForAction?._id}
      />

      <TaskDeleteDialog
        taskId={taskForAction?._id}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setTaskForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default TaskListContainer
