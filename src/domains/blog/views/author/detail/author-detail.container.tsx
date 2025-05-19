'use client'

import { IGraphqlVariables } from '@common_package'
import { IAuthorDetailResult } from '@corede_package'
import { useAuthorDetailQuery } from '@/domains/blog/api'
import { JSX, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export interface AuthorDetailInputs
  extends IGraphqlVariables<IAuthorDetailResult> {}

export interface AuthorDetailContainerUIProps {
  authorDetailData?: IAuthorDetailResult
  authorDetailIsLoading?: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface AuthorDetailContainerProps {
  children: (props: AuthorDetailContainerUIProps) => JSX.Element
  authorId?: string
}

export const AuthorDetailContainer = (props: AuthorDetailContainerProps) => {
  const { id } = useParams<{ id: string }>()

  const [authorId, setAuthorId] = useState<string | undefined>(undefined)
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: authorDetailData,
    isLoading: authorDetailIsLoading,
    error: authorDetailError,
  } = useAuthorDetailQuery(
    {
      input: { _id: authorId! },
    },
    {
      skip: !authorId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setAuthorId(id)
    }
    if (props.authorId) {
      setAuthorId(props.authorId)
    }
    if (!id && !props.authorId) {
      setNoDataError(true)
    }
  }, [id, props.authorId])

  useEffect(() => {
    if (authorDetailError) {
      setConnectionError(true)
    }
  }, [authorDetailError])

  return (
    <>
      {props.children({
        authorDetailData,
        authorDetailIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default AuthorDetailContainer
