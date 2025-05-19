import { ISubscriptionFormListItemResult } from '@corede_package'
import { getColumnDefs } from '@/components/molecules/table/data-table/columns/column-defs'
import { getTextColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/text'
import { getDateColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/date'
import { getUserProfileColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/user-profile'
import { i18n } from '@/localization'
import { TranslationResourceNamespace } from '@/localization/resources'
import { getLanguageColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/language'
import { getEnumColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/enum'
import { getSwitcherColumnDef } from '@/components/molecules/table/data-table/columns/default-column-defs/switcher'

export function subscriptionFormColumnDefs(params: {
  onEdit: (subscriptionForm: ISubscriptionFormListItemResult) => void
  onDelete: (subscriptionForm: ISubscriptionFormListItemResult) => void
}) {
  return getColumnDefs<ISubscriptionFormListItemResult>({
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
        accessorKey: 'email',
        header: i18n.t('common:email'),
        enableSorting: true,
      }),
      getEnumColumnDef({
        accessorKey: 'userType',
        header: i18n.t('common:userType'),
        enableSorting: true,
        enumName: 'SubscriptionFormUserType',
        namespace: TranslationResourceNamespace.form,
        colorScheme: 'type',
      }),
      getEnumColumnDef({
        accessorKey: 'status',
        header: i18n.t('common:status'),
        enableSorting: true,
        enumName: 'subscriptionFormStatus',
        namespace: TranslationResourceNamespace.form,
        colorScheme: 'status',
      }),
      getSwitcherColumnDef({
        accessorKey: 'newsTopicSubscribed',
        header: i18n.t('form:newsTopicSubscribed'),
      }),
      getSwitcherColumnDef({
        accessorKey: 'blogTopicSubscribed',
        header: i18n.t('form:blogTopicSubscribed'),
      }),
      getSwitcherColumnDef({
        accessorKey: 'productTopicSubscribed',
        header: i18n.t('form:productTopicSubscribed'),
      }),
      getSwitcherColumnDef({
        accessorKey: 'offerTopicSubscribed',
        header: i18n.t('form:offerTopicSubscribed'),
      }),
      getLanguageColumnDef({
        accessorKey: 'language',
        header: i18n.t('common:language'),
        enableSorting: true,
      }),
      getUserProfileColumnDef({
        accessorKey: 'user',
        header: i18n.t('common:relatedUser'),
      }),
      getDateColumnDef({
        accessorKey: 'createdAt',
        header: i18n.t('common:createdAt'),
      }),
      getDateColumnDef({
        accessorKey: 'updatedAt',
        header: i18n.t('common:updatedAt'),
      }),
    ],
  })
}
