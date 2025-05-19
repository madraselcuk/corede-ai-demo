'use client'

import { useState, useEffect, JSX } from 'react'
import { IFaqListPublicResult } from '@corede_package'
import { useFaqListPublicQuery } from '@/domains/faq/api'
import { useI18n } from '@/localization/hooks/useI18n'

export interface FaqListPopularPublicContainerUIProps {
  data: IFaqListPublicResult
  isLoading: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface FaqListPopularPublicContainerProps {
  readonly children: (
    props: FaqListPopularPublicContainerUIProps,
  ) => JSX.Element
}

export const FaqListPopularPublicContainer = ({
  children,
}: FaqListPopularPublicContainerProps) => {
  const { t } = useI18n()

  // State management
  const [noConnectionError, setNoConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // Prepare variables for GraphQL query

  const variables = {
    input: {
      filter: {
        popular: true,
      },
    },
  }

  // queries

  const {
    error: faqListError,
    data: faqListData,
    isLoading: faqListIsLoading,
  } = useFaqListPublicQuery(variables)

  // UseEffects
  useEffect(() => {
    if (faqListError) {
      setNoConnectionError(true)
    }
  }, [faqListError, t])

  useEffect(() => {
    if (faqListData?.count === 0) {
      setNoDataError(true)
    }
  }, [faqListData, t])

  return (
    <>
      {children({
        data: faqListData ?? { data: [], count: 0 },
        isLoading: faqListIsLoading,
        connectionError: noConnectionError,
        noDataError: noDataError,
      })}
    </>
  )
}
