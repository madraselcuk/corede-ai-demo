import { getColumnDefs } from "@/components/molecules/table/data-table/columns/column-defs"
import { getTextColumnDef } from "@/components/molecules/table/data-table/columns/default-column-defs/text"
import { getDateColumnDef } from "@/components/molecules/table/data-table/columns/default-column-defs/date"
import { IMilestone } from "@corede_package"
import { i18n } from '@/localization'

export function milestoneColumnDefs(params: {
  onEdit: (milestone: IMilestone) => void
  onDelete: (milestone: IMilestone) => void
}) {
  return getColumnDefs<IMilestone>({
    selectColumn: {
      enabled: true
    },
    actionsColumnDef: {
      defaultActions: {
        edit: {
          enabled: true,
          isButton: false,
          order: 0,
          onEdit: params.onEdit
        },
        delete: {
          enabled: true,
          isButton: false,
          order: 1,
          onDelete: params.onDelete
        }
      }
    },
    additionalColumns: [
      getTextColumnDef({
        accessorKey: "title",
        header: i18n.t("milestone:title"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "description",
        header: i18n.t("milestone:description")
      }),
      getTextColumnDef({
        accessorKey: "tags",
        header: i18n.t("milestone:tags"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "order",
        header: i18n.t("milestone:order")
      }),
      getDateColumnDef({
        accessorKey: "startDate",
        header: i18n.t("milestone:startDate")
      }),
      getDateColumnDef({
        accessorKey: "dueDate",
        header: i18n.t("milestone:dueDate"),
        enableSorting: true
      })
    ]
  })
}
