'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { IOrganizationCreateInput } from '@corede_package'
import { useOrganizationCreateMutation } from '@/@package/api/domains/user/organization'
import { useCallback, JSX, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { UiType } from '@/@types/common'
import useCurrentSession from '@/utils/hooks/useCurrentSession'

export interface OrganizationCreateFormInputs
  extends IGraphqlVariables<IOrganizationCreateInput> { }

export interface OrganizationCreateFormContainerUIProps {
  uiType?: UiType

  form: ReturnType<typeof useForm<OrganizationCreateFormInputs>>
  handleCreateOrganization: (values: OrganizationCreateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface OrganizationCreateFormContainerProps {
  children: (props: OrganizationCreateFormContainerUIProps) => JSX.Element
}

export const OrganizationCreateFormContainer = ({
  children,
}: OrganizationCreateFormContainerProps) => {
  const { t } = useI18n()
  const { session } = useCurrentSession()

  const [createOrganization, { isLoading, data: createOrganizationData, error: createOrganizationError }] =
    useOrganizationCreateMutation()

  const formSchema = z.object({
    input: z.object({
      name: z.string().min(1, t('common:invalidFormFieldMessage')),
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

  const form = useForm<OrganizationCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        legalName: undefined,
        summary: undefined,
        website: undefined,
        addresses: undefined,
        phone: undefined,
        email: undefined,
        socialMedias: {
          facebook: undefined,
          x: undefined,
          instagram: undefined,
          linkedin: undefined,
          youtube: undefined,
        },
        adminId: session?.user?._id || '',
      },
    },
  })


  const handleCreateOrganization = useCallback(
    async (values: OrganizationCreateFormInputs) => {
      try {
        await createOrganization(values)
      } catch (error) {
        console.error(error)
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createOrganization, t],
  )

  useEffect(() => {
    if (createOrganizationData?._id) {
      toast.push(
        <Notification title={t('user:organizationCreatedSuccessfully')} type="success">
          {t('user:organizationCreatedSuccessfully')}
        </Notification>,
      )
    }
  }, [createOrganizationData, t])

  useEffect(() => {
    if (createOrganizationError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createOrganizationError, t])

  return children({
    form,
    handleCreateOrganization,
    isLoading,
  })
}

export default OrganizationCreateFormContainer
