import { getColumnDefs } from "@/components/molecules/table/data-table/columns/column-defs"
import { getTextColumnDef } from "@/components/molecules/table/data-table/columns/default-column-defs/text"
import { getDateColumnDef } from "@/components/molecules/table/data-table/columns/default-column-defs/date"
import { IProjectListItemResult } from "@/@package/corede"
import { i18n } from '@/localization'
import { getUsersV1ColumnDef } from "@/components/molecules/table/data-table/columns/default-column-defs/users-v1"

export function projectColumnDefs(params: {
  onEdit: (project: IProjectListItemResult) => void
  onDelete: (project: IProjectListItemResult) => void
}) {
  return getColumnDefs<IProjectListItemResult>({
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
        header: i18n.t("project:title"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "description",
        header: i18n.t("project:description")
      }),
      getTextColumnDef({
        accessorKey: "tags",
        header: i18n.t("project:tags")
      }),
      getTextColumnDef({
        accessorKey: "isMain",
        header: i18n.t("project:isMain")
      }),
      getTextColumnDef({
        accessorKey: "status",
        header: i18n.t("project:status"),
        enableSorting: true
      }),
      {
        accessorKey: "progress",
        header: i18n.t("project:progress"),
        enableSorting: true
      },
      getTextColumnDef({
        accessorKey: "priority",
        header: i18n.t("project:priority"),
        enableSorting: true
      }),
      getUsersV1ColumnDef({
        accessorKey: "assignees",
        header: i18n.t("project:assignees")
      }),
      getUsersV1ColumnDef({
        accessorKey: "followers",
        header: i18n.t("project:followers")
      }),
      getDateColumnDef({
        accessorKey: "startDate",
        header: i18n.t("project:startDate"),
        enableSorting: true
      }),
      getDateColumnDef({
        accessorKey: "dueDate",
        header: i18n.t("project:dueDate"),
        enableSorting: true
      })
    ]
  })
}
