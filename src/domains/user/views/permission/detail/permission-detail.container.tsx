'use client'

import { IGraphqlVariables } from '@common_package'
import { IPermissionDetailResult } from '@corede_package'
import { usePermissionDetailQuery } from '@/@package/api/domains/user/permission/permission.api'
import { useEffect, useState, JSX } from 'react'
import { useParams } from 'next/navigation'
import { useI18n } from '@/localization/hooks/useI18n'

export interface PermissionDetailInputs extends IGraphqlVariables<IPermissionDetailResult> { }

export interface PermissionDetailContainerUIProps {
  permissionDetailData?: IPermissionDetailResult
  permissionDetailIsLoading?: boolean

  connectionError?: boolean
  noDataError?: boolean
}

export interface PermissionDetailContainerProps {
  children: (props: PermissionDetailContainerUIProps) => JSX.Element
  permissionId?: string
}

export const PermissionDetailContainer = (props: PermissionDetailContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentPermissionId, setCurrentPermissionId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: permissionDetailData,
    isLoading: permissionDetailIsLoading,
    error: permissionDetailError,
  } = usePermissionDetailQuery(
    {
      input: { _id: currentPermissionId! },
    },
    {
      skip: !currentPermissionId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentPermissionId(id)
    }
    if (props.permissionId) {
      setCurrentPermissionId(props.permissionId)
    }
    if (!id && !props.permissionId) {
      setNoDataError(true)
    }
  }, [id, props.permissionId])

  useEffect(() => {
    if (permissionDetailError) {
      setConnectionError(true)
    }
  }, [permissionDetailError, t])

  return (
    <>
      {props.children({
        permissionDetailData,
        permissionDetailIsLoading,

        connectionError,
        noDataError,
      })}
    </>
  )
}

export default PermissionDetailContainer
