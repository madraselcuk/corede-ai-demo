'use client'

import { useState, useEffect, JSX } from 'react'
import {
  IHelpCenterListResult,
  IHelpCenterCategoryListResult,
} from '@corede_package'
import {
  useHelpCenterListQuery,
  useHelpCenterCategoryListQuery,
} from '@/domains/help-center/api'

export interface HelpCenterListPublicContainerUIProps {
  helpCenterListResult: IHelpCenterListResult
  helpCenterListIsLoading: boolean
  helpCenterCategoryList: IHelpCenterCategoryListResult
  helpCenterCategoryListIsLoading: boolean
  handleCategoryFilterChange: (categoryId: string) => void

  noConnectionError?: boolean
  noDataError?: boolean
}

export interface HelpCenterListPublicContainerProps {
  readonly children: (
    props: HelpCenterListPublicContainerUIProps,
  ) => JSX.Element | undefined
}

export const HelpCenterListPublicContainer = ({
  children,
}: HelpCenterListPublicContainerProps) => {
  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )
  // queries

  const {
    error: helpCenterListError,
    data: helpCenterListData,
    isLoading: helpCenterListIsLoading,
  } = useHelpCenterListQuery({})

  const {
    data: helpCenterCategoryListData,
    isLoading: helpCenterCategoryListIsLoading,
    error: helpCenterCategoryListError,
  } = useHelpCenterCategoryListQuery({})

  const handleCategoryFilterChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId)
  }

  const helpCenterList = helpCenterListData?.data ?? []
  const filteredHelpCenterList = helpCenterList?.filter(
    (helpCenterCategory) => helpCenterCategory._id === selectedCategoryId,
  )

  // UseEffects

  useEffect(() => {
    if (helpCenterListError || helpCenterCategoryListError) {
      setNoConnectionError(true)
    }
  }, [helpCenterListError, helpCenterCategoryListError])

  useEffect(() => {
    if (helpCenterListData?.count === 0) {
      setNoDataError(true)
    }
  }, [helpCenterListData])

  return children({
    helpCenterListResult: {
      data: filteredHelpCenterList,
      count: filteredHelpCenterList.length,
    },
    helpCenterListIsLoading,
    helpCenterCategoryList: helpCenterCategoryListData ?? {
      data: [],
      count: 0,
    },
    helpCenterCategoryListIsLoading,
    handleCategoryFilterChange,

    noConnectionError,
    noDataError,
  })
}

export default HelpCenterListPublicContainer
