import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { ITaskListItemResult } from '@corede_package'
import { i18n } from '@/localization'
import { getUsersV1ColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/users-v1'
import { getProgressColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/progress'
import { getChipListColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/chip-list'

export function taskColumnDefs(params: {
  onEdit: (task: ITaskListItemResult) => void
  onDelete: (task: ITaskListItemResult) => void
}) {
  return getColumnDefs<ITaskListItemResult>({
    selectColumn: {
      enabled: true,
    },
    actionsColumnDef: {
      defaultActions: {
        edit: {
          enabled: true,
          isButton: false,
          order: 0,
          onEdit: params.onEdit,
        },
        delete: {
          enabled: true,
          isButton: false,
          order: 1,
          onDelete: params.onDelete,
        },
      },
    },
    additionalColumns: [
      getTextColumnDef({
        accessorKey: 'title',
        header: i18n.t('task:title'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'description',
        header: i18n.t('task:description'),
      }),
      getTextColumnDef({
        accessorKey: 'status',
        header: i18n.t('task:status'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'priority',
        header: i18n.t('task:priority'),
        enableSorting: true,
      }),
      getProgressColumnDef({
        accessorKey: 'progress',
        header: i18n.t('task:progress'),
      }),
      getChipListColumnDef({
        accessorKey: 'tags',
        header: i18n.t('blog:tags'),
      }),
      getUsersV1ColumnDef({
        accessorKey: 'assignees',
        header: i18n.t('task:assignees'),
      }),
      getUsersV1ColumnDef({
        accessorKey: 'followers',
        header: i18n.t('task:followers'),
      }),
      getDateColumnDef({
        accessorKey: 'startDate',
        header: i18n.t('task:startDate'),
        enableSorting: true,
      }),
      getDateColumnDef({
        accessorKey: 'dueDate',
        header: i18n.t('task:dueDate'),
        enableSorting: true,
      }),
    ],
  })
}
