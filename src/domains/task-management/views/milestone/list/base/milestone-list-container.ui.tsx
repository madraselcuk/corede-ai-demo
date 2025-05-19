import { DataTable } from "@/components/molecules/table/data-table/data-table"
import { MilestoneListContainerUIProps } from "../milestone-list.container"
import { Button } from "@/components/ui/co/button"


export const MilestoneListTableUI = (props: MilestoneListContainerUIProps) => {
  return (
    <div className="container mx-auto py-10">
      <Button onClick={props.handleCreate}>Create</Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default MilestoneListTableUI
