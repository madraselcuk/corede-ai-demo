'use client'

import { DataTable } from '@/components/molecules/table/data-table/data-table'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/localization/hooks/useI18n'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { motion } from 'framer-motion'
import {
  containerAnimation,
  formContainerAnimation,
} from '@/components/animation/motion'
import { Title } from '@/components/shared/co'
import { CommonListByDataTableUIComponentProps } from '@/@types/common.func.containers'
import { IBaseHeaderToolbarFilter } from '@/components/molecules/table/data-table/header-toolbar/table-header-toolbar'
import { AllTranslationKeys } from '@/localization/types'

export const FuncContainerUIForListWithDataTableTemplate = <
  TListItemResult,
  TTableFilter extends IBaseHeaderToolbarFilter,
>(
  props: CommonListByDataTableUIComponentProps<
    TListItemResult,
    TTableFilter
  > & {
    title: AllTranslationKeys
    createButtonTranslationKey: AllTranslationKeys
  },
) => {
  const { t } = useI18n()

  if (props.noConnectionError) {
    return <NoConnectionState />
  }

  return (
    <motion.div
      className="flex flex-col gap-4 justify-between"
      {...containerAnimation}
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4">
        <Title title={t(props.title)} />
        <Button variant="solid" onClick={props.handleCreate}>
          {t(props.createButtonTranslationKey)}
        </Button>
      </div>
      <motion.div className="flex flex-col gap-4" {...containerAnimation}>
        <motion.div
          className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-xl px-4 py-4 md:px-8 md:py-7"
          {...formContainerAnimation}
        >
          <DataTable {...props.dataTableProps} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
