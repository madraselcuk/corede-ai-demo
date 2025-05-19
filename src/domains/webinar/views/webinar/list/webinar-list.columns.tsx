'use client'

import { IWebinarResult } from "@corede_package"
import { getColumnDefs } from "@/components/molecules/table/data-table/columns/column-defs"
import { getTextColumnDef } from "@/components/molecules/table/data-table/columns/default-column-defs/text"
import { useI18n } from "@/localization/hooks/useI18n"
import { getDateColumnDef } from "@/components/molecules/table/data-table/columns/default-column-defs/date"

export function webinarColumnDefs(params: {
  onEdit: (webinar: IWebinarResult) => void
  onDelete: (webinar: IWebinarResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IWebinarResult>({
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
        accessorKey: "status",
        header: t("common:status"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "title",
        header: t("common:title"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "description",
        header: t("common:description"),
        enableSorting: false
      }),
      getTextColumnDef({
        accessorKey: "content",
        header: t("common:content"),
        enableSorting: false
      }),
      getTextColumnDef({
        accessorKey: "language",
        header: t("common:language"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "type",
        header: t("common:type"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "quota",
        header: t("common:quota"),
        enableSorting: true
      }),
      getDateColumnDef({
        accessorKey: "lastApplicationDate",
        header: t("common:lastApplicationDate"),
        enableSorting: true
      }),
      getDateColumnDef({
        accessorKey: "startDate",
        header: t("common:startDate"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "duration",
        header: t("common:duration"),
        enableSorting: true
      }),
      getTextColumnDef({
        accessorKey: "participationLink",
        header: t("common:participationLink")
      })
    ]
  })
}
