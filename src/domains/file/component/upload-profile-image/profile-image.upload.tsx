'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import Dialog from '@/components/ui/Dialog'
import { Input } from '@/components/ui/co/input'
import { CoAvatar } from '@/components/atoms/avatar'
import { Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { saveImageOwn } from '../../helpers/image-save.own.helper'
import { i18n } from '@/localization'
import { preprocessImage } from '../../helpers/image-preprocessor.helper'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { IFileMetadata } from '@common_package'
import { IImageCompressOptions } from '../../util/image-compressor.util'
import { saveImageToEntity } from '../../helpers/image-save.entity.helper'
import { ImageUp } from 'lucide-react'
import { useI18n } from '@/localization/hooks/useI18n'

export interface UploadProfileImageComponentProps {
  /**
   * If the image will be assigned to an entity, then this will be the entity id.
   */
  entityId?: string
  currentImage?: string
  withAvatarPack?: boolean
  useImageCreateMutation: any
  /**
   * If the image will not be assigned (`willAssign` is false), then this will be ignored or should not be provided.
   */
  useImageAssignMutation?: any
  willAssign: boolean
  hasThumbnail: boolean
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
  failedMessage?: string
  imageCompressOptions?: IImageCompressOptions
  /**
   * this can be used when the image will not be assigned automatically
   * but the upper component will use the uploaded file's metadata.
   * @example create operations
   */
  imageFileChanged?: (imageFile: IFileMetadata | undefined) => void
}

export const UploadProfileImageComponent = (
  props: UploadProfileImageComponentProps,
) => {
  const [selectedImageFile, setSelectedImageFile] = useState<File | undefined>(
    undefined,
  )
  const [selectedImageThumbnailFile, setSelectedImageThumbnailFile] = useState<
    File | undefined
  >(undefined)
  const [preprocessing, setPreprocessing] = useState(false)
  const [loading, setLoading] = useState(false)

  const [imageCreate] = props.useImageCreateMutation()
  const [imageAssign] = props.useImageAssignMutation()
  const { t } = useI18n()

  const handleImageChange = async ({ e, file }: { e?: any; file?: File }) => {
    setPreprocessing(true)
    const imageFile = file || e?.target?.files?.[0]

    const preprocessedImages = await preprocessImage({
      selectedImageFile: imageFile,
      hasThumbnail: props.hasThumbnail,
      compressOptions: props.imageCompressOptions,
    })

    if (preprocessedImages?.image) {
      setSelectedImageFile(preprocessedImages?.image)
      if (props.willAssign) {
        setSelectedImageThumbnailFile(preprocessedImages?.thumbnailImage)
      }
    }
    setPreprocessing(false)
  }

  const handleSaveImage = async () => {
    setLoading(true)
    try {
      const saveImageResult = props.entityId
        ? await saveImageToEntity({
            entityId: props.entityId,
            selectedImageFile: {
              image: selectedImageFile,
              imageThumbnail: props.hasThumbnail
                ? selectedImageThumbnailFile
                : undefined,
            },
            imageCreateQuery: imageCreate,
            imageAssignQuery: imageAssign,
            willAssign: props.willAssign,
          })
        : await saveImageOwn({
            selectedImageFile: {
              image: selectedImageFile,
              imageThumbnail: props.hasThumbnail
                ? selectedImageThumbnailFile
                : undefined,
            },
            imageCreateQuery: imageCreate,
            imageAssignQuery: imageAssign,
            willAssign: props.willAssign,
          })

      props.imageFileChanged &&
        saveImageResult?.fileMetadata &&
        props.imageFileChanged(saveImageResult?.fileMetadata)

      props.setOpen && props.setOpen(false)
    } catch (error) {
      console.warn('Error saving logo:', error)
      toast.push(
        <Notification title="imageUploadFailed" type="danger">
          {props.failedMessage ?? i18n.t(`file:imageUploadFailed`)}
        </Notification>,
      )
    }

    setLoading(false)
  }

  return (
    <Dialog
      isOpen={props.open || false}
      onClose={() => {
        props.setOpen && props.setOpen(false)
      }}
      onRequestClose={() => {
        props.setOpen && props.setOpen(false)
      }}
      onAfterOpen={() => {
        setSelectedImageFile(undefined)
        setSelectedImageThumbnailFile(undefined)
      }}
    >
      <div className="flex flex-col gap-4">
        <h3>{props.title || t('user:profilePicture')}</h3>
        <div className="flex flex-col gap-4 border-b border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col md:flex-row  items-center gap-4">
          <CoAvatar
            shape="rounded"
            border="solid"
            size="xl"
            imageProps={{
              src: selectedImageFile
                ? URL.createObjectURL(selectedImageFile)
                : props.currentImage,
            }}
          />
          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="profile-image-input"
              className="relative flex items-center justify-center  py-3 px-4 border 
              border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 
              dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                {preprocessing && <Loader2 className="animate-spin" />}
                <ImageUp className="w-6 h-6 mr-3 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {t('user:selectImage')}
                </span>
              </div>
              <Input
                id="profile-image-input"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => handleImageChange({ e })}
                className="hidden"
              />
            </label>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
              {t('user:allowedImageTypes')}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => handleSaveImage()} disabled={loading}>
            <div className="flex items-center justify-center gap-2">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t('common:submit')}
            </div>
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
