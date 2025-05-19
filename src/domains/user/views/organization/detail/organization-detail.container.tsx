'use client'

import { IGraphqlVariables } from '@common_package'
import { IOrganizationDetailResult } from '@corede_package'
import { useOrganizationDetailQuery } from '@/@package/api/domains/user/organization'
import { useEffect, useState, JSX } from 'react'
import { useParams } from 'next/navigation'
import { useI18n } from '@/localization/hooks/useI18n'

export interface OrganizationDetailInputs extends IGraphqlVariables<IOrganizationDetailResult> { }

export interface OrganizationDetailContainerUIProps {
  organizationDetailData?: IOrganizationDetailResult
  organizationDetailIsLoading?: boolean

  connectionError?: boolean
  noDataError?: boolean
}

export interface OrganizationDetailContainerProps {
  children: (props: OrganizationDetailContainerUIProps) => JSX.Element
  organizationId?: string
}

export const OrganizationDetailContainer = (props: OrganizationDetailContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentOrganizationId, setCurrentOrganizationId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: organizationDetailData,
    isLoading: organizationDetailIsLoading,
    error: organizationDetailError,
  } = useOrganizationDetailQuery(
    {
      input: { _id: currentOrganizationId! },
    },
    {
      skip: !currentOrganizationId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentOrganizationId(id)
    }
    if (props.organizationId) {
      setCurrentOrganizationId(props.organizationId)
    }
    if (!id && !props.organizationId) {
      setNoDataError(true)
    }
  }, [id, props.organizationId])

  useEffect(() => {
    if (organizationDetailError) {
      setConnectionError(true)
    }
  }, [organizationDetailError, t])

  return (
    <>
      {props.children({
        organizationDetailData,
        organizationDetailIsLoading,

        connectionError,
        noDataError,
      })}
    </>
  )
}

export default OrganizationDetailContainer
