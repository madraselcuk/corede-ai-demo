'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, RoleType } from '@common_package'
import { IRoleCreateInput } from '@corede_package'
import { useRoleCreateMutation } from '@/@package/api/domains/user/role/role.api'
import { useCallback, JSX, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { UiType } from '@/@types/common'

export interface RoleCreateFormInputs
  extends IGraphqlVariables<IRoleCreateInput> { }

export interface RoleCreateFormContainerUIProps {
  uiType?: UiType

  form: ReturnType<typeof useForm<RoleCreateFormInputs>>
  handleCreateRole: (values: RoleCreateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface RoleCreateFormContainerProps {
  children: (props: RoleCreateFormContainerUIProps) => JSX.Element
}

export const RoleCreateFormContainer = ({
  children,
}: RoleCreateFormContainerProps) => {
  const { t } = useI18n()

  const [createRole, { isLoading, data: createRoleData, error: createRoleError }] =
    useRoleCreateMutation()

  const formSchema = z.object({
    input: z.object({
      name: z.string().min(1, t('common:invalidFormFieldMessage')),
      type: z.nativeEnum(RoleType).optional(),
      permissionIds: z.array(z.string().optional()).min(1, t('common:selectAtLeastOnePermission')),
      description: z.string().optional(),
      organizationId: z.string().optional(),
    }),
  })

  const form = useForm<RoleCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        type: undefined,
        permissionIds: [],
        description: '',
        organizationId: undefined,
      },
    },
  })

  const handleCreateRole = useCallback(
    async (values: RoleCreateFormInputs) => {
      try {
        await createRole(values)
      } catch (error) {
        console.error(error)
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createRole, t],
  )

  useEffect(() => {
    if (createRoleData?._id) {
      toast.push(
        <Notification title={t('common:roleCreatedSuccessfully')} type="success">
          {t('common:roleCreatedSuccessfully')}
        </Notification>,
      )
    }
  }, [createRoleData, t])

  useEffect(() => {
    if (createRoleError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createRoleError, t])

  return children({
    form,
    handleCreateRole,
    isLoading,
  })
}

export default RoleCreateFormContainer
