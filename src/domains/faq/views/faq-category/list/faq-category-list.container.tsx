'use client'

import { IFaqCategoryListItemResult } from '@corede_package'
import { FaqCategoryFilters } from './types'
import { faqCategoryColumnDefs } from './faq-category-list.columns'
import { useFaqCategoryListQuery } from '@/domains/faq/api'
import { FaqCategoryDeleteDialog } from '../../../components/faq-category-delete-dialog/faq-category-delete-dialog'
import { FaqCategoryUpdateDialog } from '../update'
import { FaqCategoryCreateDialog } from '../create'
import { FaqCategoryDetailDialog } from '../detail'
import {
  CommonListByDataTableFuncContainerProps,
  CommonListByDataTableUIComponentProps,
} from '@/@types/common.func.containers'
import { BaseListByDataTableFuncContainer } from '@/components/organisms/base-func-container/base-list-by-data-table.func.container'

export interface FaqCategoryListUIComponentProps
  extends CommonListByDataTableUIComponentProps<
    IFaqCategoryListItemResult,
    FaqCategoryFilters
  > {}

export const FaqCategoryListContainer = ({
  children,
  onListError,
}: CommonListByDataTableFuncContainerProps<
  IFaqCategoryListItemResult,
  FaqCategoryFilters
>) => {
  return (
    <BaseListByDataTableFuncContainer
      entityName={{
        translationKey: 'faq:faqCategory',
        value: 'faqCategory',
      }}
      useEntityListQuery={useFaqCategoryListQuery}
      entityColumnDefs={faqCategoryColumnDefs}
      onListError={onListError}
      headerToolbarParams={{
        searchBarQueryParams: {
          searchFieldKey: 'name',
        },
      }}
      entityActionViews={{
        detail: FaqCategoryDetailDialog,
        create: FaqCategoryCreateDialog,
        update: FaqCategoryUpdateDialog,
        delete: FaqCategoryDeleteDialog,
      }}
    >
      {children}
    </BaseListByDataTableFuncContainer>
  )
}

export default FaqCategoryListContainer
