'use client'

import { IFaqListItemResult } from '@corede_package'
import { FaqFilters } from './types'
import { faqColumnDefs } from './faq-list.columns'
import { useFaqListQuery } from '@/domains/faq/api/'
import { FaqDeleteDialog } from '../../../components/faq-delete-dialog/faq-delete-dialog'
import { FaqCreateDialog } from '../create'
import { FaqDetailDialog } from '../detail'
import { FaqUpdateDialog } from '../update'
import {
  CommonListByDataTableFuncContainerProps,
  CommonListByDataTableUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseListByDataTableFuncContainer } from '@/components/organisms/base-func-container/base-list-by-data-table.func.container'

export interface FaqListUIComponentProps
  extends CommonListByDataTableUIComponentProps<
    IFaqListItemResult,
    FaqFilters
  > {}

export const FaqListContainer = ({
  children,
  onListError,
}: CommonListByDataTableFuncContainerProps<IFaqListItemResult, FaqFilters>) => {
  return (
    <BaseListByDataTableFuncContainer
      entityName={{
        translationKey: 'faq:faq',
        value: 'faq',
      }}
      useEntityListQuery={useFaqListQuery}
      entityColumnDefs={faqColumnDefs}
      onListError={onListError}
      headerToolbarParams={{
        searchBarQueryParams: {
          searchFieldKey: 'question',
        },
      }}
      entityActionViews={{
        detail: FaqDetailDialog,
        create: FaqCreateDialog,
        update: FaqUpdateDialog,
        delete: FaqDeleteDialog,
      }}
    >
      {children}
    </BaseListByDataTableFuncContainer>
  )
}

export default FaqListContainer
