'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  IGraphqlVariables,
  PermissionAction,
  PermissionActionScope,
  PermissionCategory,
} from '@common_package'
import {
  IPermissionDetailResult,
  IPermissionUpdateInput,
} from '@corede_package'
import {
  usePermissionUpdateMutation,
  usePermissionDetailQuery,
} from '@/domains/user/api'
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

export interface PermissionUpdateFormInputs
  extends IGraphqlVariables<IPermissionUpdateInput> {}

export interface PermissionUpdateFormContainerUIProps {
  uiType?: UiType

  isLoadingDetail: boolean
  detail?: IPermissionDetailResult

  //form fields
  form: ReturnType<typeof useForm<PermissionUpdateFormInputs>>
  handleUpdatePermission: (values: PermissionUpdateFormInputs) => Promise<void>

  //state fields
  isUpdating: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface PermissionUpdateFormContainerProps {
  permissionId?: string
  children: (props: PermissionUpdateFormContainerUIProps) => JSX.Element
}

export const PermissionUpdateFormContainer = ({
  permissionId,
  children,
}: PermissionUpdateFormContainerProps) => {
  const { t } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentPermissionId, setCurrentPermissionId] = useState<
    string | undefined
  >(undefined)

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: permissionData,
    isLoading: permissionIsLoading,
    error: permissionError,
  } = usePermissionDetailQuery(
    {
      input: { _id: currentPermissionId! },
    },
    {
      skip: !currentPermissionId,
    },
  )

  // mutations
  const [updatePermission, { isLoading: updatePermissionIsLoading }] =
    usePermissionUpdateMutation()

  const formSchema: z.ZodType<PermissionUpdateFormInputs> = z
    .object({
      input: z.object({
        action: z.nativeEnum(PermissionAction).optional(),
        subject: z.string().optional(),
        actionScope: z.nativeEnum(PermissionActionScope).optional(),
        description: z.string().optional(),
        domain: z.string().optional(),
        subdomain: z.string().optional(),
        category: z.nativeEnum(PermissionCategory).optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, permissionData)
      return inputChanged
    })

  const form = useForm<PermissionUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        action: undefined,
        subject: undefined,
        actionScope: undefined,
        description: undefined,
        domain: undefined,
        subdomain: undefined,
        category: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdatePermission = useCallback(
    async (values: PermissionUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, permissionData)
        await updatePermission({
          filter: {
            _id: currentPermissionId!,
          },
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'updatePermission.error')
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [permissionData, updatePermission, currentPermissionId, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentPermissionId(id)
    }
    if (permissionId) {
      setCurrentPermissionId(permissionId)
    }
    if (!id && !permissionId) {
      setNoDataError(true)
    }
  }, [id, permissionId])

  useEffect(() => {
    if (permissionError) {
      setConnectionError(true)
    }
  }, [permissionError])

  // Populate form with Permission data when available
  useEffect(() => {
    if (permissionData) {
      form.reset({
        input: {
          action: permissionData.action,
          subject: permissionData.subject,
          actionScope: permissionData.actionScope,
          description: permissionData.description,
          domain: permissionData.domain,
          subdomain: permissionData.subdomain,
          category: permissionData.category,
        },
      })
    }
  }, [permissionData, form])

  return (
    <>
      {children({
        isLoadingDetail: permissionIsLoading,
        detail: permissionData,
        form,
        handleUpdatePermission: submitUpdatePermission,
        isUpdating: updatePermissionIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default PermissionUpdateFormContainer
