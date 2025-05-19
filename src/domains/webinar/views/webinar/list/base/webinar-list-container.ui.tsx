'use client'

import { DataTable } from "@/components/molecules/table/data-table/data-table"
import { WebinarListContainerUIProps } from "../webinar-list.container"
import { Button } from "@/components/ui/co/button"
import { NoConnectionState } from "@/components/organisms/no-connection-state/no-connection-state"
import { useI18n } from "@/localization/hooks/useI18n"

export const WebinarListContainerUI = (props: WebinarListContainerUIProps) => {
  const { t } = useI18n()

  if (props.noConnectionError) {
    return <NoConnectionState />
  }

  return (
    <div className="container mx-auto py-10">
      <Button onClick={props.handleCreate}>{t("common:create")}</Button>
      <DataTable {...props.dataTableProps} />
    </div>
  )
}

export default WebinarListContainerUI 