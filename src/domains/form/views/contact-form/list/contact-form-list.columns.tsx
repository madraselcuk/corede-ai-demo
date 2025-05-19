import { IContactFormListItemResult } from '@corede_package'
import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getUserProfileColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/user-profile'
import { TranslationResourceNamespace } from '@/localization/resources'
import { getEnumColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/enum'
import { useI18n } from '@/localization/hooks/useI18n'

export function contactFormColumnDefs(params: {
  onEdit: (contactForm: IContactFormListItemResult) => void
  onDelete: (contactForm: IContactFormListItemResult) => void
}) {
  const { t } = useI18n()

  return getColumnDefs<IContactFormListItemResult>({
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
        accessorKey: 'fullName',
        header: t('common:fullName'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'email',
        header: t('common:email'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'subject',
        header: t('common:subject'),
        enableSorting: true,
      }),
      getTextColumnDef({
        accessorKey: 'message',
        header: t('common:message'),
        enableSorting: true,
      }),
      getEnumColumnDef({
        accessorKey: 'status',
        header: t('common:status'),
        enableSorting: true,
        colorScheme: 'status',
        headerOrientation: 'center',
        enumName: 'contactFormStatus',
        namespace: TranslationResourceNamespace.form,
      }),
      getEnumColumnDef({
        accessorKey: 'type',
        header: t('common:type'),
        enableSorting: true,
        colorScheme: 'status',
        headerOrientation: 'center',
        enumName: 'contactFormType',
        namespace: TranslationResourceNamespace.form,
      }),
      getEnumColumnDef({
        accessorKey: 'source',
        header: t('common:source'),
        enableSorting: true,
        colorScheme: 'status',
        headerOrientation: 'center',
        enumName: 'contactFormSource',
        namespace: TranslationResourceNamespace.form,
      }),
      getUserProfileColumnDef({
        accessorKey: 'responsibleUser',
        header: t('form:responsibleUser'),
      }),
      getUserProfileColumnDef({
        accessorKey: 'escalatedUser',
        header: t('form:escalatedUser'),
      }),
      getDateColumnDef({
        accessorKey: 'createdAt',
        header: t('common:createdAt'),
      }),
      getDateColumnDef({
        accessorKey: 'updatedAt',
        header: t('common:updatedAt'),
      }),
    ],
  })
}
