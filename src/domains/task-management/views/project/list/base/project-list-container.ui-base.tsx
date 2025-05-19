import { DataTable } from "@/components/molecules/table/data-table/data-table"
import { ProjectListContainerUIProps } from "../project-list.container"
import { Button } from "@/components/ui/co/button"

export const ProjectListTableUIBase = (props: ProjectListContainerUIProps) => {
  return (
    <div className="container mx-auto py-10">
      <Button onClick={props.handleCreate}>Create</Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default ProjectListTableUIBase
