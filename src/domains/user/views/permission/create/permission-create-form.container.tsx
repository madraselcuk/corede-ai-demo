'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, PermissionAction, PermissionActionScope, PermissionCategory } from '@common_package'
import { IPermissionCreateInput } from '@corede_package'
import { usePermissionCreateMutation } from '@/@package/api/domains/user/permission/permission.api'
import { useCallback, JSX, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { UiType } from '@/@types/common'

export interface PermissionCreateFormInputs
  extends IGraphqlVariables<IPermissionCreateInput> { }

export interface PermissionCreateFormContainerUIProps {
  uiType?: UiType

  form: ReturnType<typeof useForm<PermissionCreateFormInputs>>
  handleCreatePermission: (values: PermissionCreateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface PermissionCreateFormContainerProps {
  children: (props: PermissionCreateFormContainerUIProps) => JSX.Element
}

export const PermissionCreateFormContainer = ({
  children,
}: PermissionCreateFormContainerProps) => {
  const { t } = useI18n()

  const [createPermission, { isLoading, data: createPermissionData, error: createPermissionError }] =
    usePermissionCreateMutation()

  const formSchema = z.object({
    input: z.object({
      action: z.nativeEnum(PermissionAction),
      subject: z.string().min(1, t('common:invalidFormFieldMessage')),
      actionScope: z.nativeEnum(PermissionActionScope),
      description: z.string().optional(),
      domain: z.string().optional(),
      subdomain: z.string().optional(),
      category: z.nativeEnum(PermissionCategory).optional(),
    }),
  })

  const form = useForm<PermissionCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        action: undefined,
        subject: '',
        actionScope: undefined,
        description: '',
        domain: '',
        subdomain: '',
        category: undefined,
      },
    },
  })

  const handleCreatePermission = useCallback(
    async (values: PermissionCreateFormInputs) => {
      try {
        await createPermission(values)
      } catch (error) {
        console.error(error)
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createPermission, t],
  )

  useEffect(() => {
    if (createPermissionData?._id) {
      toast.push(
        <Notification title={t('common:permissionCreatedSuccessfully')} type="success">
          {t('common:permissionCreatedSuccessfully')}
        </Notification>,
      )
    }
  }, [createPermissionData, t])

  useEffect(() => {
    if (createPermissionError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createPermissionError, t])

  return children({
    form,
    handleCreatePermission,
    isLoading,
  })
}

export default PermissionCreateFormContainer
