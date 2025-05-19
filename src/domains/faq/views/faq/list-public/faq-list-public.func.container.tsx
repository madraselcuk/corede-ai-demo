'use client'

import { useState, useEffect, JSX } from 'react'
import {
  IFaqListPublicResult,
  IFaqCategoryListPublicResult,
} from '@corede_package'
import {
  useFaqListPublicQuery,
  useFaqCategoryListPublicQuery,
} from '@/domains/faq/api'

export interface FaqListPublicContainerUIProps {
  faqListResult: IFaqListPublicResult
  faqListIsLoading: boolean
  faqCategoryList: IFaqCategoryListPublicResult
  faqCategoryListIsLoading: boolean

  noConnectionError?: boolean
  noDataError?: boolean
}

export interface FaqListPublicContainerProps {
  readonly children: (
    props: FaqListPublicContainerUIProps,
  ) => JSX.Element | undefined
  /**
   * For this func container, we assume that there is no pagination,
   * But max number of faqs to be listed can be determined here
   */
  faqListLimit?: number
}

export const FaqListPublicContainer = ({
  children,
}: FaqListPublicContainerProps) => {
  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)
  // queries

  const {
    error: faqListError,
    data: faqListData,
    isLoading: faqListIsLoading,
  } = useFaqListPublicQuery({}) // TODO: should add pageSize limit here

  const { data: faqCategoryListData, isLoading: faqCategoryListIsLoading } =
    useFaqCategoryListPublicQuery({})

  // UseEffects

  useEffect(() => {
    if (faqListError) {
      setNoConnectionError(true)
    }
  }, [faqListError])

  useEffect(() => {
    if (faqListData?.count === 0) {
      setNoDataError(true)
    }
  }, [faqListData])

  return children({
    faqListResult: faqListData ?? { data: [], count: 0 },
    faqListIsLoading,
    faqCategoryList: faqCategoryListData ?? { data: [], count: 0 },
    faqCategoryListIsLoading,

    noConnectionError,
    noDataError,
  })
}
