'use client'

import { IGraphqlVariables } from '@common_package'
import { IContactFormDetailResult } from '@corede_package'
import { JSX, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useContactFormDetailQuery } from '@/domains/form/api'

export interface ContactFormDetailInputs
  extends IGraphqlVariables<IContactFormDetailResult> {}

export interface ContactFormDetailContainerUIProps {
  contactFormDetailData?: IContactFormDetailResult
  contactFormDetailIsLoading?: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface ContactFormDetailContainerProps {
  children: (props: ContactFormDetailContainerUIProps) => JSX.Element
  contactFormId?: string
}

export const ContactFormDetailContainer = (
  props: ContactFormDetailContainerProps,
) => {
  const { id } = useParams<{ id: string }>()

  const [contactFormId, setContactFormId] = useState<string | undefined>(
    undefined,
  )
  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: contactFormDetailData,
    isLoading: contactFormDetailIsLoading,
    error: contactFormDetailError,
  } = useContactFormDetailQuery(
    {
      input: { _id: contactFormId! },
    },
    {
      skip: !contactFormId,
    },
  )

  // use effects
  useEffect(() => {
    if (id) {
      setContactFormId(id)
    }
    if (props.contactFormId) {
      setContactFormId(props.contactFormId)
    }
    if (!id && !props.contactFormId) {
      setNoDataError(true)
    }
  }, [id, props.contactFormId])

  useEffect(() => {
    if (contactFormDetailError) {
      setConnectionError(true)
    }
  }, [contactFormDetailError])

  return (
    <>
      {props.children({
        contactFormDetailData,
        contactFormDetailIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default ContactFormDetailContainer
