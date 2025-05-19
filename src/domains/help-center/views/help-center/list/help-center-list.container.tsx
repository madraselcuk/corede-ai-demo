'use client'

import { IHelpCenterListItemResult } from '@corede_package'
import { HelpCenterFilters } from './types'
import { helpCenterColumnDefs } from './help-center-list.columns'
import { useHelpCenterListQuery } from '@/domains/help-center/api/'
import { HelpCenterDeleteDialog } from '../../../components/help-center-delete-dialog/help-center-delete-dialog'
import { HelpCenterCreateDialog } from '../create'
import { HelpCenterDetailDialog } from '../detail'
import { HelpCenterUpdateDialog } from '../update'
import {
  CommonListByDataTableFuncContainerProps,
  CommonListByDataTableUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseListByDataTableFuncContainer } from '@/components/organisms/base-func-container/base-list-by-data-table.func.container'

export interface HelpCenterListUIComponentProps
  extends CommonListByDataTableUIComponentProps<
    IHelpCenterListItemResult,
    HelpCenterFilters
  > {}

export const HelpCenterListContainer = ({
  children,
  onListError,
}: CommonListByDataTableFuncContainerProps<IHelpCenterListItemResult, HelpCenterFilters>) => {
  return (
    <BaseListByDataTableFuncContainer
      entityName={{
        translationKey: 'helpCenter:helpCenter',
        value: 'helpCenter',
      }}
      useEntityListQuery={useHelpCenterListQuery}
      entityColumnDefs={helpCenterColumnDefs}
      onListError={onListError}
      headerToolbarParams={{
        searchBarQueryParams: {
          searchFieldKey: 'question',
        },
      }}
      entityActionViews={{
        detail: HelpCenterDetailDialog,
        create: HelpCenterCreateDialog,
        update: HelpCenterUpdateDialog,
        delete: HelpCenterDeleteDialog,
      }}
    >
      {children}
    </BaseListByDataTableFuncContainer>
  )
}

export default HelpCenterListContainer
