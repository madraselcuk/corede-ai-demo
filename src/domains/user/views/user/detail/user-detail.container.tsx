'use client'

import { IGraphqlVariables } from '@common_package'
import { IUserDetailResult } from '@corede_package'
import { useUserDetailQuery } from '@/@package/api/domains/user/user/user.api'
import { useEffect, useState, JSX } from 'react'
import { useParams } from 'next/navigation'
import { useI18n } from '@/localization/hooks/useI18n'

export interface UserDetailInputs extends IGraphqlVariables<IUserDetailResult> { }

export interface UserDetailContainerUIProps {
  userDetailData?: IUserDetailResult
  userDetailIsLoading?: boolean

  connectionError?: boolean
  noDataError?: boolean
}

export interface UserDetailContainerProps {
  children: (props: UserDetailContainerUIProps) => JSX.Element
  userId?: string
}

export const UserDetailContainer = (props: UserDetailContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentUserId, setCurrentUserId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: userDetailData,
    isLoading: userDetailIsLoading,
    error: userDetailError,
  } = useUserDetailQuery(
    {
      input: { _id: currentUserId! },
    },
    {
      skip: !currentUserId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentUserId(id)
    }
    if (props.userId) {
      setCurrentUserId(props.userId)
    }
    if (!id && !props.userId) {
      setNoDataError(true)
    }
  }, [id, props.userId])

  useEffect(() => {
    if (userDetailError) {
      setConnectionError(true)
    }
  }, [userDetailError, t])

  return (
    <>
      {props.children({
        userDetailData,
        userDetailIsLoading,

        connectionError,
        noDataError,
      })}
    </>
  )
}

export default UserDetailContainer
