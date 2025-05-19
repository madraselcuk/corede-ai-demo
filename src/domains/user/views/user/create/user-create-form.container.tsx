'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IGraphqlVariables, Language, Gender } from '@common_package'
import { IUserCreateInput } from '@corede_package'
import { useUserCreateMutation } from '@/@package/api/domains/user/user/user.api'
import { useCallback, JSX, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/localization/hooks/useI18n'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { UiType } from '@/@types/common'
import { UserType } from '@corede_package'

export interface UserCreateFormInputs
  extends IGraphqlVariables<IUserCreateInput> { }

export interface UserCreateFormContainerUIProps {
  uiType?: UiType

  form: ReturnType<typeof useForm<UserCreateFormInputs>>
  handleCreateUser: (values: UserCreateFormInputs) => Promise<void>
  isLoading: boolean
}

export interface UserCreateFormContainerProps {
  children: (props: UserCreateFormContainerUIProps) => JSX.Element
}

export const UserCreateFormContainer = ({
  children,
}: UserCreateFormContainerProps) => {
  const { t, currentLanguage } = useI18n()

  const [createUser, { isLoading, data: createUserData, error: createUserError }] =
    useUserCreateMutation()

  const formSchema = z.object({
    input: z.object({
      type: z.nativeEnum(UserType).optional(),
      email: z.string().email(t('common:invalidFormFieldMessage')),
      phoneNumber: z.string().optional(),
      name: z.string().min(1, t('common:invalidFormFieldMessage')),
      surname: z.string().min(1, t('common:invalidFormFieldMessage')),
      birthDate: z.date().optional(),
      gender: z.nativeEnum(Gender).optional(),
      address: z.string().optional(),
      description: z.string().optional(),
      country: z.string().optional(),
      city: z.string().optional(),
      language: z.nativeEnum(Language).optional(),
      organizationId: z.string().optional(),
      departmentId: z.string().optional(),
      // Add other fields as needed
    }),
  })

  const form = useForm<UserCreateFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        type: undefined,
        email: '',
        name: '',
        surname: '',
        language: currentLanguage,
        // ... other default values as needed
      },
    },
  })

  const handleCreateUser = useCallback(
    async (values: UserCreateFormInputs) => {
      try {
        await createUser(values)
      } catch (error) {
        console.error(error)
        toast.push(
          <Notification title={t('common:error')} type="danger">
            {t('common:unknownError')}
          </Notification>,
        )
      }
    },
    [createUser, t],
  )

  useEffect(() => {
    if (createUserData?._id) {
      toast.push(
        <Notification title={t('user:userCreatedSuccessfully')} type="success">
          {t('user:userCreatedSuccessfully')}
        </Notification>,
      )
    }
  }, [createUserData, t])

  useEffect(() => {
    if (createUserError) {
      toast.push(
        <Notification title={t('common:unknownError')} type="danger">
          {t('common:unknownError')}
        </Notification>,
      )
    }
  }, [createUserError, t])

  return children({
    form,
    handleCreateUser,
    isLoading,
  })
}

export default UserCreateFormContainer
