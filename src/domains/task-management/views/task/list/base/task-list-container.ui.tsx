import { DataTable } from "@/components/molecules/table/data-table/data-table"
import { TaskListContainerUIProps } from "../task-list.container"
import { Button } from "@/components/ui/co/button"


export const TaskListTableUI = (props: TaskListContainerUIProps) => {
  return (
    <div className="container mx-auto py-10">
      <Button onClick={props.handleCreate}>Create</Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default TaskListTableUI
