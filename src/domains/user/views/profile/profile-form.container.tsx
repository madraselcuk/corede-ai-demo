'use client'

import { i18n } from '@/localization'
import { IImageCompressOptions } from '@/domains/file/util/image-compressor.util'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { IUserUpdateOwnInput } from '@corede_package'
import { UploadProfileImageComponent } from '@/domains/file/component/upload-profile-image/profile-image.upload'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useUserDetailOwnQuery,
  useUserUpdateOwnMutation,
  useUserProfileImageAssignMutation,
  useUserProfileImageCreateMutation,
} from '@/@package/api/domains/user'
import {
  Gender,
  IFileMetadata,
  IGraphqlVariables,
  Language,
} from '@common_package'
import {
  Dispatch,
  JSX,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import {
  objectIsChanged,
  removeEmptyAndExistingField,
} from '@/utils/zod.utilities'
import { toast } from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { UiType } from '@/@types/common'

const defaultProfileImageCompressOptions: IImageCompressOptions = {
  image: {
    quality: 0.6,
    maxWidth: 1000,
  },
  imageThumbnail: {
    quality: 0.5,
    maxWidth: 200,
  },
}

export interface ProfileFormInputs
  extends IGraphqlVariables<IUserUpdateOwnInput> {}

export interface ProfileFormContainerUIProps {
  uiType?: UiType

  form: ReturnType<typeof useForm<ProfileFormInputs>>
  handleUserUpdateOwnSubmit: (values: ProfileFormInputs) => Promise<void>
  isLoading: boolean

  // for profile image
  setOpenChangeImage: Dispatch<SetStateAction<boolean>>
  profileImageUrl?: string
}

export interface ProfileFormContainerProps {
  children: (props: ProfileFormContainerUIProps) => JSX.Element
}

export const ProfileFormContainer = ({
  children,
}: ProfileFormContainerProps) => {
  const [profileImageMetadata, setProfileImageMetadata] = useState<
    IFileMetadata | undefined
  >(undefined)
  const [openChangeImage, setOpenChangeImage] = useState(false)

  // queries
  const { data: userDetailData } = useUserDetailOwnQuery({})

  // mutations
  const [
    userUpdateOwn,
    {
      data: userUpdateOwnData,
      isLoading: userUpdateOwnLoading,
      error: userUpdateOwnError,
    },
  ] = useUserUpdateOwnMutation()

  const formSchema: z.ZodType<ProfileFormInputs> = z
    .object({
      input: z.object({
        name: z.string().min(1, i18n.t('common:requiredNameMessage')),
        surname: z.string().min(1, i18n.t('common:requiredNameMessage')),
        birthDate: z.any().optional(),
        gender: z.nativeEnum(Gender).optional(),
        language: z.nativeEnum(Language).optional(),
        country: z.string().optional(),
        city: z.string().optional(),
        phoneNumber: z
          .string()
          .optional()
          .refine(
            (phoneNumber) => phoneNumber && isValidPhoneNumber(phoneNumber),
            {
              message: i18n.t('common:invalidPhoneNumberMessage'),
            },
          ),
      }),
    })
    .refine((data) => {
      const inputChanged = objectIsChanged(data.input, userDetailData)
      return inputChanged
    })

  const form = useForm<ProfileFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: {
        name: '',
        surname: '',
        birthDate: undefined,
        gender: undefined,
        country: undefined,
        city: undefined,
        language: undefined,
        phoneNumber: undefined,
      },
    },
    reValidateMode: 'onChange',
  })

  const submitUserUpdateOwn = useCallback(
    async (values: ProfileFormInputs) => {
      try {
        removeEmptyAndExistingField(values.input, userDetailData)
        await userUpdateOwn(values)
      } catch (error) {
        console.error(error, 'submitUserUpdateOwn.error')
        toast.push(
          <Notification title={i18n.t('unknownError')} type="danger">
            {i18n.t('unknownError')}
          </Notification>,
        )
      }
    },
    [userDetailData, userUpdateOwn],
  )

  useEffect(() => {
    if (userDetailData) {
      form.setValue('input.name', userDetailData?.name)
      form.setValue('input.surname', userDetailData?.surname)
      form.setValue('input.birthDate', userDetailData?.birthDate)
      form.setValue('input.gender', userDetailData?.gender)
      form.setValue('input.country', userDetailData?.country)
      form.setValue('input.city', userDetailData?.city)
      form.setValue('input.language', userDetailData?.language)
      form.setValue('input.phoneNumber', userDetailData?.phoneNumber)

      setProfileImageMetadata(userDetailData?.profileImage)
    }
  }, [userDetailData, form])

  useEffect(() => {
    if (userUpdateOwnData) {
      toast.push(
        <Notification
          title={i18n.t('user:updateProfileSuccess')}
          type="success"
        >
          {i18n.t('user:updateProfileSuccessDescription')}
        </Notification>,
      )
    }
  }, [userUpdateOwnData])

  useEffect(() => {
    if (userUpdateOwnError) {
      toast.push(
        <Notification
          title={i18n.t('account:updateProfileError')}
          type="danger"
        >
          {i18n.t('account:updateProfileError')}
        </Notification>,
      )
    }
  }, [userUpdateOwnError])

  return (
    <>
      {children({
        form,
        handleUserUpdateOwnSubmit: submitUserUpdateOwn,
        isLoading: userUpdateOwnLoading,
        setOpenChangeImage,
        profileImageUrl:
          profileImageMetadata?.thumbnailPublicUrl ??
          profileImageMetadata?.publicUrl,
      })}

      <UploadProfileImageComponent
        currentImage={
          profileImageMetadata?.thumbnailPublicUrl ??
          profileImageMetadata?.publicUrl
        }
        useImageAssignMutation={useUserProfileImageAssignMutation}
        useImageCreateMutation={useUserProfileImageCreateMutation}
        open={openChangeImage}
        setOpen={setOpenChangeImage}
        withAvatarPack={true}
        willAssign={true}
        hasThumbnail={true}
        imageFileChanged={(imageFileMetadata) => {
          setProfileImageMetadata(imageFileMetadata)
        }}
        imageCompressOptions={defaultProfileImageCompressOptions}
      />
    </>
  )
}

export default ProfileFormContainer
