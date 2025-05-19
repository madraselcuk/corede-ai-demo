'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Gender } from '@common_package'
import { IUserDetailResult, IUserUpdateInput } from '@corede_package'
import { useUserUpdateMutation, useUserDetailQuery } from '@/domains/user/api'
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

export interface UserUpdateFormInputs
  extends IGraphqlVariables<IUserUpdateInput> {}

export interface UserUpdateFormContainerUIProps {
  uiType?: UiType

  isLoadingDetail: boolean
  detail?: IUserDetailResult

  //form fields
  form: ReturnType<typeof useForm<UserUpdateFormInputs>>
  handleUpdateUser: (values: UserUpdateFormInputs) => Promise<void>

  //state fields
  isUpdating: boolean
  connectionError?: boolean
  noDataError?: boolean
}

export interface UserUpdateFormContainerProps {
  userId?: string
  children: (props: UserUpdateFormContainerUIProps) => JSX.Element
}

export const UserUpdateFormContainer = ({
  userId,
  children,
}: UserUpdateFormContainerProps) => {
  const { t, currentLanguage } = useI18n()
  const { id } = useParams<{ id: string }>()

  const [currentUserId, setCurrentUserId] = useState<string | undefined>(
    undefined,
  )

  const [connectionError, setConnectionError] = useState<boolean>(false)
  const [noDataError, setNoDataError] = useState<boolean>(false)

  // queries
  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
  } = useUserDetailQuery(
    {
      input: { _id: currentUserId! },
    },
    {
      skip: !currentUserId,
    },
  )

  // mutations
  const [updateUser, { isLoading: updateUserIsLoading }] =
    useUserUpdateMutation()

  const formSchema: z.ZodType<UserUpdateFormInputs> = z
    .object({
      input: z.object({
        name: z.string().min(1, t('common:invalidFormFieldMessage')).optional(),
        surname: z
          .string()
          .min(1, t('common:invalidFormFieldMessage'))
          .optional(),
        phoneNumber: z.string().optional(),
        birthDate: z.date().optional(),
        gender: z.nativeEnum(Gender).optional(),
        address: z.string().optional(),
        description: z.string().optional(),
        country: z.string().optional(),
        state: z.string().optional(),
        city: z.string().optional(),
        language: z.string().optional(),
        departmentId: z.string().optional(),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, userData)
      return inputChanged
    })

  const form = useForm<UserUpdateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: undefined,
        surname: undefined,
        phoneNumber: undefined,
        address: undefined,
        country: undefined,
        city: undefined,
        state: undefined,
        language: currentLanguage,
        departmentId: undefined,
      },
    },
    reValidateMode: 'onBlur',
  })

  const submitUpdateUser = useCallback(
    async (values: UserUpdateFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, userData)
        await updateUser({
          filter: {
            _id: currentUserId!,
          },
          input: values.input,
        })
      } catch (error) {
        console.error(error, 'updateUser.error')
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [userData, updateUser, currentUserId, t],
  )

  // use effects
  useEffect(() => {
    if (id) {
      setCurrentUserId(id)
    }
    if (userId) {
      setCurrentUserId(userId)
    }
    if (!id && !userId) {
      setNoDataError(true)
    }
  }, [id, userId])

  useEffect(() => {
    if (userError) {
      setConnectionError(true)
    }
  }, [userError])

  // Populate form with User data when available
  useEffect(() => {
    if (userData) {
      form.reset({
        input: {
          name: userData.name,
          surname: userData.surname,
          phoneNumber: userData.phoneNumber,
          birthDate: userData.birthDate,
          gender: userData.gender,
          address: userData.address,
          description: userData.description,
          country: userData.country,
          city: userData.city,
          state: userData.state,
          language: userData.language,
          departmentId: userData.department?._id,
        },
      })
    }
  }, [userData, form])

  return (
    <>
      {children({
        isLoadingDetail: userIsLoading,
        detail: userData,
        form,
        handleUpdateUser: submitUpdateUser,
        isUpdating: updateUserIsLoading,
        connectionError,
        noDataError,
      })}
    </>
  )
}

export default UserUpdateFormContainer
