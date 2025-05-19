'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { IOrganizationDetailResult, IOrganizationUpdateInput } from '@corede_package'
import {
  useOrganizationUpdateMutation,
  useOrganizationDetailQuery,
} from '@/@package/api/domains/user/organization'
import { useCallback, useEffect, useState, JSX } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useParams } from 'next/navigation'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { useI18n } from '@/localization/hooks/useI18n'
import { UiType } from '@/@types/common'

export interface OrganizationUpdateFormInputs
  extends IGraphqlVariables<IOrganizationUpdateInput> { }

export interface OrganizationUpdateFormContainerUIProps {
  uiType?: UiType

  isLoadingDetail: boolean
  detail?: IOrganizationDetailResult

  //form fields
  form: ReturnType<typeof useForm<OrganizationUpdateFormInputs>>
  handleUpdateOrganization: (values: OrganizationUpdateFormInputs) => Promise<void>

  //state fields
  isUpdating: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface OrganizationUpdateFormContainerProps {
  organizationId?: string
  children: (props: OrganizationUpdateFormContainerUIProps) => JSX.Element
}

export const OrganizationUpdateFormContainer = ({
  organizationId,
  children,
}: OrganizationUpdateFormContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentOrganizationId, setCurrentOrganizationId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: organizationData,
    isLoading: organizationIsLoading,
    error: organizationError,
  } = useOrganizationDetailQuery(
    {
      input: { _id: currentOrganizationId! },
    },
    {
      skip: !currentOrganizationId,
    },
  )

  // mutations
  const [updateOrganization, { isLoading: updateOrganizationIsLoading }] = useOrganizationUpdateMutation()

  const formSchema: z.ZodType<OrganizationUpdateFormInputs> = z
    .object({
      input: z.object({
        name: z.string().min(1, t('common:invalidFormFieldMessage')).optional(),
        legalName: z.string().optional(),
        summary: z.string().optional(),
        website: z.string().optional(),
        addresses: z.array(
          z.object({
            fullName: z.string().optional(),
            phone: z.string().optional(),
            country: z.string().optional(),
            state: z.string().optional(),
            city: z.string().optional(),
            street: z.string().optional(),
            zip: z.string().optional(),
          })
        ).optional(),
        phone: z.string().optional(),
        email: z.string().email(t('common:invalidFormFieldMessage')).optional(),
        socialMedias: z.object({
          facebook: z.string().optional(),
          x: z.string().optional(),
          instagram: z.string().optional(),
          linkedin: z.string().optional(),
          youtube: z.string().optional(),
        }).optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, organizationData)
      return inputChanged
    })

  const form = useForm<OrganizationUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: undefined,
        legalName: undefined,
        summary: undefined,
        website: undefined,
        addresses: undefined,
        phone: undefined,
        email: undefined,
        socialMedias: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateOrganization = useCallback(
    async (values: OrganizationUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, organizationData)
        await updateOrganization({
          filter: {
            _id: currentOrganizationId!,
          },
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'updateOrganization.error')
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [organizationData, updateOrganization, currentOrganizationId, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentOrganizationId(id)
    }
    if (organizationId) {
      setCurrentOrganizationId(organizationId)
    }
    if (!id && !organizationId) {
      setNoDataError(true)
    }
  }, [id, organizationId])

  useEffect(() => {
    if (organizationError) {
      setConnectionError(true)
    }
  }, [organizationError])

  // Populate form with Organization data when available
  useEffect(() => {
    if (organizationData) {
      form.reset({
        input: {
          name: organizationData.name,
          legalName: organizationData.legalName,
          summary: organizationData.summary,
          website: organizationData.website,
          addresses: organizationData.addresses,
          phone: organizationData.phone,
          email: organizationData.email,
          socialMedias: organizationData.socialMedias,
        },
      })
    }
  }, [organizationData, form])

  return (
    <>
      {children({
        isLoadingDetail: organizationIsLoading,
        detail: organizationData,
        form,
        handleUpdateOrganization: submitUpdateOrganization,
        isUpdating: updateOrganizationIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default OrganizationUpdateFormContainer
