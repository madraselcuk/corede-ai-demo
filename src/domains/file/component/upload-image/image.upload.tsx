import { useState } from 'react'
import { IPreprocessedFile } from '../../interfaces/preprocessed-file.interface'
import { i18n } from '@/localization'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { IImageCompressOptions } from '../../util/image-compressor.util'
import { IFileMetadata } from '@/@package/common'
import { ImageChooser } from '../chooser-image/image.chooser'
import { Button } from '@/components/ui/co/button'
import { saveImageToEntity } from '../../helpers/image-save.entity.helper'
import { saveImageOwn } from '../../helpers/image-save.own.helper'

export interface ImageUploadProps {
  /**
   * If the image will be assigned to an entity, then this will be the entity id.
   */
  entityId?: string
  useImageCreateMutation: any
  /**
   * If the image will not be assigned (`willAssign` is false), then this will be ignored or should not be provided.
   */
  useImageAssignMutation?: any
  willAssign: boolean
  hasThumbnail: boolean
  className?: string
  currentImage?: string
  // Instead of direct upload, we'll emit the preprocessed file
  onImagePreprocess?: (preprocessedFile: IPreprocessedFile) => void
  // Optional loading state controlled by parent
  isUploading?: boolean
  maxFileSize?: number
  imageCompressOptions?: IImageCompressOptions
  /**
   * this can be used when the image will not be assigned automatically
   * but the upper component will use the uploaded file's metadata.
   * @example create operations
   */
  imageFileChanged?: (imageFile: IFileMetadata | undefined) => void
  failedMessage?: string
}

/**
 * Used for uploading image with compression and thumbnail (if necessary)
 * - will not upload image to the server or create presigned url or file.
 * - will only return the compressed image and thumbnail image
 * - creating file and uploading will be done in the parent component (e.g. in BlogCreateForm, when create blog button is clicked)
 */
export const ImageUpload = ({
  maxFileSize = 50 * 1024 * 1024,
  className,
  isUploading = false,
  ...props
}: ImageUploadProps) => {
  const [selectedImageFile, setSelectedImageFile] = useState<File | undefined>(
    undefined,
  )
  const [selectedImageThumbnailFile, setSelectedImageThumbnailFile] = useState<
    File | undefined
  >(undefined)
  const [loading, setLoading] = useState(false)

  const [imageCreate] = props.useImageCreateMutation()
  const [imageAssign] = props.useImageAssignMutation()

  const handleImagePreprocessed = async (
    preprocessedFile: IPreprocessedFile,
  ) => {
    if (preprocessedFile?.image) {
      setSelectedImageFile(preprocessedFile?.image)
      if (props.willAssign) {
        setSelectedImageThumbnailFile(preprocessedFile?.thumbnailImage)
      }
    }

    props.onImagePreprocess?.(preprocessedFile)
  }

  const handleSaveImage = async () => {
    console.log('selectedImageFile.name', selectedImageFile?.name)
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
    <div className="flex flex-col gap-2">
      <ImageChooser
        className={className}
        onImagePreprocess={handleImagePreprocessed}
        isUploading={isUploading}
        currentImage={props.currentImage}
        maxFileSize={maxFileSize}
        imageCompressOptions={props.imageCompressOptions}
      />
      <Button disabled={loading} onClick={handleSaveImage}>
        Save
      </Button>
    </div>
  )
}
