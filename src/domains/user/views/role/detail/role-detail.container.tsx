'use client'

import { IGraphqlVariables } from '@common_package'
import { IRoleDetailResult } from '@corede_package'
import { useRoleDetailQuery } from '@/@package/api/domains/user/role/role.api'
import { useEffect, useState, JSX } from 'react'
import { useParams } from 'next/navigation'
import { useI18n } from '@/localization/hooks/useI18n'

export interface RoleDetailInputs extends IGraphqlVariables<IRoleDetailResult> { }

export interface RoleDetailContainerUIProps {
  roleDetailData?: IRoleDetailResult
  roleDetailIsLoading?: boolean

  connectionError?: boolean
  noDataError?: boolean
}

export interface RoleDetailContainerProps {
  children: (props: RoleDetailContainerUIProps) => JSX.Element
  roleId?: string
}

export const RoleDetailContainer = (props: RoleDetailContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentRoleId, setCurrentRoleId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: roleDetailData,
    isLoading: roleDetailIsLoading,
    error: roleDetailError,
  } = useRoleDetailQuery(
    {
      input: { _id: currentRoleId! },
    },
    {
      skip: !currentRoleId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentRoleId(id)
    }
    if (props.roleId) {
      setCurrentRoleId(props.roleId)
    }
    if (!id && !props.roleId) {
      setNoDataError(true)
    }
  }, [id, props.roleId])

  useEffect(() => {
    if (roleDetailError) {
      setConnectionError(true)
    }
  }, [roleDetailError, t])

  return (
    <>
      {props.children({
        roleDetailData,
        roleDetailIsLoading,

        connectionError,
        noDataError,
      })}
    </>
  )
}

export default RoleDetailContainer
