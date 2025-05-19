'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables } from '@common_package'
import { IRoleDetailResult, IRoleUpdateInput, RoleType } from '@corede_package'
import {
  useRoleUpdateMutation,
  useRoleDetailQuery,
} from '@/@package/api/domains/user/role/role.api'
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

export interface RoleUpdateFormInputs
  extends IGraphqlVariables<IRoleUpdateInput> {}

export interface RoleUpdateFormContainerUIProps {
  uiType?: UiType

  isLoadingDetail: boolean
  detail?: IRoleDetailResult

  //form fields
  form: ReturnType<typeof useForm<RoleUpdateFormInputs>>
  handleUpdateRole: (values: RoleUpdateFormInputs) => Promise<void>

  //state fields
  isUpdating: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface RoleUpdateFormContainerProps {
  roleId?: string
  children: (props: RoleUpdateFormContainerUIProps) => JSX.Element
}

export const RoleUpdateFormContainer = ({
  roleId,
  children,
}: RoleUpdateFormContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentRoleId, setCurrentRoleId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: roleData,
    isLoading: roleIsLoading,
    error: roleError,
  } = useRoleDetailQuery(
    {
      input: { _id: currentRoleId! },
    },
    {
      skip: !currentRoleId,
    },
  )

  // mutations
  const [updateRole, { isLoading: updateRoleIsLoading }] =
    useRoleUpdateMutation()

  const formSchema: z.ZodType<RoleUpdateFormInputs> = z
    .object({
      input: z.object({
        name: z.string().optional(),
        type: z.nativeEnum(RoleType).optional(),
        permissionIds: z.array(z.string()).optional(),
        description: z.string().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, roleData)
      return inputChanged
    })

  const form = useForm<RoleUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: undefined,
        type: undefined,
        permissionIds: undefined,
        description: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateRole = useCallback(
    async (values: RoleUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, roleData)
        await updateRole({
          filter: {
            _id: currentRoleId!,
          },
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'updateRole.error')
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [roleData, updateRole, currentRoleId, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentRoleId(id)
    }
    if (roleId) {
      setCurrentRoleId(roleId)
    }
    if (!id && !roleId) {
      setNoDataError(true)
    }
  }, [id, roleId])

  useEffect(() => {
    if (roleError) {
      setConnectionError(true)
    }
  }, [roleError])

  // Populate form with Role data when available
  useEffect(() => {
    if (roleData) {
      form.reset({
        input: {
          name: roleData.name,
          type: roleData.type,
          permissionIds: roleData.permissions.map(
            (permission) => permission._id,
          ),
          description: roleData.description,
        },
      })
    }
  }, [roleData, form])

  return (
    <>
      {children({
        isLoadingDetail: roleIsLoading,
        detail: roleData,
        form,
        handleUpdateRole: submitUpdateRole,
        isUpdating: updateRoleIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default RoleUpdateFormContainer
