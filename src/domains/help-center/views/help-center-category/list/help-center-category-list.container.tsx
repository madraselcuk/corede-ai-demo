'use client'

import { IHelpCenterCategoryListItemResult } from '@corede_package'
import { HelpCenterCategoryFilters } from './types'
import { helpCenterCategoryColumnDefs } from './help-center-category-list.columns'
import { useHelpCenterCategoryListQuery } from '@/domains/help-center/api'
import { HelpCenterCategoryDeleteDialog } from '../../../components/help-center-category-delete-dialog/help-center-category-delete-dialog'
import { HelpCenterCategoryUpdateDialog } from '../update'
import { HelpCenterCategoryCreateDialog } from '../create'
import { HelpCenterCategoryDetailDialog } from '../detail'
import {
  CommonListByDataTableFuncContainerProps,
  CommonListByDataTableUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseListByDataTableFuncContainer } from '@/components/organisms/base-func-container/base-list-by-data-table.func.container'

export interface HelpCenterCategoryListUIComponentProps
  extends CommonListByDataTableUIComponentProps<
    IHelpCenterCategoryListItemResult,
    HelpCenterCategoryFilters
  > {}

export const HelpCenterCategoryListContainer = ({
  children,
  onListError,
}: CommonListByDataTableFuncContainerProps<
  IHelpCenterCategoryListItemResult,
  HelpCenterCategoryFilters
>) => {
  return (
    <BaseListByDataTableFuncContainer
      entityName={{
        translationKey: 'helpCenter:helpCenterCategory',
        value: 'helpCenterCategory',
      }}
      useEntityListQuery={useHelpCenterCategoryListQuery}
      entityColumnDefs={helpCenterCategoryColumnDefs}
      onListError={onListError}
      headerToolbarParams={{
        searchBarQueryParams: {
          searchFieldKey: 'name',
        },
      }}
      entityActionViews={{
        detail: HelpCenterCategoryDetailDialog,
        create: HelpCenterCategoryCreateDialog,
        update: HelpCenterCategoryUpdateDialog,
        delete: HelpCenterCategoryDeleteDialog,
      }}
    >
      {children}
    </BaseListByDataTableFuncContainer>
  )
}

export default HelpCenterCategoryListContainer
