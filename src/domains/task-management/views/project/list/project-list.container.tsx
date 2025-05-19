import { useState, useCallback, useEffect, JSX } from "react"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { ProjectFilters } from "./types"
import { SortingState } from "@tanstack/react-table"
import { DataTableProps } from "@/components/molecules/table/data-table/data-table.props"
import { projectColumnDefs } from "./project-list.columns"
import { i18n } from "@/localization"
import { ProjectDeleteDialog } from "@/domains/task-management/components/project-delete-dialog/project-delete-dialog"
import ProjectDetailDrawer from "../detail/base/project-detail.drawer.base"
import ProjectCreateDrawer from "../create/base/project-create.drawer.base"
import ProjectUpdateDrawer from "../update/base/project-update.drawer.base"
import { IProjectListItemResult } from "@corede_package"
import {
  useProjectListQuery,
} from "@/domains/task-management/api"
import toast from "@/components/ui/toast"
import Notification from "@/components/ui/Notification"

export interface ProjectListContainerUIProps {
  handleCreate?: () => void
  dataTableProps: DataTableProps<IProjectListItemResult, ProjectFilters>
}

export interface ProjectListContainerProps {
  readonly children: (props: ProjectListContainerUIProps) => JSX.Element
}

export const ProjectListContainer = ({
  children
}: ProjectListContainerProps) => {

  // State management
  const [filters, setFilters] = useState<ProjectFilters>({})
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [sorting, setSorting] = useLocalStorage<SortingState | undefined>(
    "project-list-sorting",
    undefined
  )
  const [selectedRows, setSelectedRows] = useLocalStorage<string[]>(
    "project-list-selected",
    []
  )

  // Add state for actions
  const [projectForAction, setProjectForAction] = useState<
    IProjectListItemResult | undefined
  >(undefined)
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
            [sorting?.at(0)?.id ?? ""]: sorting?.at(0)?.desc ? -1 : 1
          }
          : undefined
      },
      filter: filters.searchQuery ? { title: filters.searchQuery } : undefined
    }
  }

  // Reset pagination when filters change
  useEffect(() => {
    setPageIndex(0)
  }, [filters])


  // queries
  const {
    data: projectsData,
    isLoading: projectsIsLoading,
    error: projectsError,
    refetch: refetchProjects
  } = useProjectListQuery(variables)

  console.log(projectsData)

  useEffect(() => {
    if (projectsError) {
      toast.push(
        // TODO: add error message translation
        <Notification title="Error loading projects" type="danger">
          Error loading projects
        </Notification>,
      )
    }
  }, [projectsError])

  const handlePaginationChange = useCallback(
    (pageIndex: number, pageSize: number) => {
      setPageIndex(pageIndex)
      setPageSize(pageSize)
    },
    []
  )

  const handleClearSelection = useCallback(() => {
    setSelectedRows([])
  }, [setSelectedRows])

  // Add handlers
  const handleEditClick = useCallback((project: IProjectListItemResult) => {
    setProjectForAction(project)
    setOpenUpdateDialog(true)
  }, [])

  const handleDeleteClick = useCallback((project: IProjectListItemResult) => {
    setProjectForAction(project)
    setDeleteDialogOpen(true)
  }, [])

  const handleDeleteSuccess = useCallback(() => {
    refetchProjects()
    setSelectedRows([])
  }, [refetchProjects, setSelectedRows])

  const handleBulkDelete = useCallback(
    (selectedIds: string[]) => {
      if (selectedIds.length > 0) {
        const projectToDelete = projectsData?.data.find(
          (project) => project._id === selectedIds[0]
        )
        if (projectToDelete) {
          handleDeleteClick(projectToDelete)
        }
      }
    },
    [projectsData?.data, handleDeleteClick]
  )

  const handleRowClick = useCallback((project: IProjectListItemResult) => {
    setProjectForAction(project)
    setOpenDetailDialog(true)
  }, [])

  return (
    <>
      {children({
        handleCreate: () => {
          setOpenCreateDialog(true)
        },
        dataTableProps: {
          data: projectsData?.data ?? [],
          columns: projectColumnDefs({
            onEdit: handleEditClick,
            onDelete: handleDeleteClick
          }),
          filters: filters,
          setFilters: setFilters,
          pageCount: Math.ceil((projectsData?.count ?? 0) / pageSize),
          pageSize: pageSize,
          pageIndex: pageIndex,
          onPaginationChange: handlePaginationChange,
          selectedRows: selectedRows,
          onSelectedRowsChange: setSelectedRows,
          isLoading: projectsIsLoading,
          onDelete: handleBulkDelete,
          onClearSelection: handleClearSelection,
          onRowClick: handleRowClick,
          sorting: sorting,
          onSortingChange: setSorting,
          defaultToolbarProps: {
            search: {
              enabled: true,
              placeholder: i18n.t("project:projectSearchByTitlePlaceholder")
            },
            dateRange: {
              enabled: false
            }
          }
        }
      })}

      <ProjectDetailDrawer
        open={openDetailDialog}
        onOpenChange={setOpenDetailDialog}
        onClose={() => {
          setProjectForAction(undefined)
        }}
        projectId={projectForAction?._id}
      />

      <ProjectCreateDrawer
        open={openCreateDialog}
        onOpenChange={setOpenCreateDialog}
        onClose={() => {
          setProjectForAction(undefined)
        }}
      />

      <ProjectUpdateDrawer
        open={openUpdateDialog}
        onOpenChange={setOpenUpdateDialog}
        onClose={() => {
          setProjectForAction(undefined)
        }}
        projectId={projectForAction?._id}
      />

      <ProjectDeleteDialog
        projectId={projectForAction?._id}
        projectQuestion={projectForAction?.title}
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false)
          setProjectForAction(undefined)
        }}
        onSuccess={handleDeleteSuccess}
      />
    </>
  )
}

export default ProjectListContainer
