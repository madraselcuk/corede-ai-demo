import { useState } from 'react'
import { Loader2, Edit2 } from 'lucide-react'
import { preprocessImage } from '../../helpers/image-preprocessor.helper'
import { IPreprocessedFile } from '../../interfaces/preprocessed-file.interface'
import { i18n } from '@/localization'
import toast from '@/components/ui/toast'
import Notification from '@/components/ui/Notification'
import { cn } from '@/utils/css-class-name.utility'
import { IImageCompressOptions } from '../../util/image-compressor.util'


export interface ImageChooserProps {
  imageCompressOptions?: IImageCompressOptions
  maxFileSize?: number
  className?: string
  currentImage?: string
  // Instead of direct upload, we'll emit the preprocessed file
  onImagePreprocess?: (preprocessedFile: IPreprocessedFile) => void
  // Optional loading state controlled by parent
  isUploading?: boolean
}


/**
 * Used for choosing image from the file system
 * - will not upload image to the server or create presigned url or file.
 * - will only return the compressed image and thumbnail image
 * - creating file and uploading will be done in the parent component (e.g. in BlogCreateForm, when create blog button is clicked)
 */
export const ImageChooser = ({
  imageCompressOptions,
  maxFileSize = 50 * 1024 * 1024,
  className,
  currentImage,
  onImagePreprocess,
  isUploading = false,
}: ImageChooserProps) => {
  const [selectedPreprocessedFile, setSelectedPreprocessedFile] = useState<
    IPreprocessedFile | undefined
  >()
  const [preprocessing, setPreprocessing] = useState(false)

  const handleImageChange = async (file: File) => {
    if (!file.type.match(/^image\/(jpeg|png)$/)) {
      toast.push(
        <Notification title="invalidImageType" type="danger">
          {i18n.t('file:invalidImageType')}
        </Notification>,
      )
      return
    }

    if (file.size > maxFileSize) {
      toast.push(
        <Notification title="fileTooLarge" type="danger">
          {i18n.t('file:fileTooLarge')}
        </Notification>,
      )
      return
    }

    setPreprocessing(true)
    try {
      const preprocessedImages = await preprocessImage({
        selectedImageFile: file,
        hasThumbnail: false,
        compressOptions: imageCompressOptions,
      })

      if (preprocessedImages?.image) {
        setSelectedPreprocessedFile({
          image: preprocessedImages.image,
          thumbnailImage: preprocessedImages.thumbnailImage,
        })
        onImagePreprocess?.({
          image: preprocessedImages.image,
          thumbnailImage: preprocessedImages.thumbnailImage,
        })
      }
    } catch (error) {
      console.warn('Error preprocessing image:', error)
      toast.push(
        <Notification title="imageProcessingError" type="danger">
          {i18n.t('file:imageProcessingError')}
        </Notification>,
      )
    } finally {
      setPreprocessing(false)
    }
  }

  const showImagePreview = selectedPreprocessedFile?.image || currentImage
  const showLoading = preprocessing || isUploading

  const handleChooseFileClick = () => {
    document.getElementById('file-input')?.click()
  }

  return (
    <div
      className={cn(
        'relative w-full aspect-video rounded-lg overflow-hidden',
        !showImagePreview && 'border-2 border-dashed border-gray-300',
        className,
      )}
      onDragOver={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      onDrop={(e) => {
        e.preventDefault()
        e.stopPropagation()
        if (showLoading) return
        const file = e.dataTransfer.files?.[0]
        if (file) handleImageChange(file)
      }}
    >
      <div className="absolute inset-0">
        {showImagePreview ? (
          <>
            <img
              src={
                selectedPreprocessedFile?.image
                  ? URL.createObjectURL(selectedPreprocessedFile?.image)
                  : currentImage
              }
              alt="Uploaded preview"
              className={cn(
                'w-full h-full object-cover',
                isUploading && 'opacity-50',
              )}
            />
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <Loader2 className="size-8 animate-spin text-white" />
              </div>
            )}
            <button
              onClick={() => document.getElementById('file-input')?.click()}
              className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
              disabled={showLoading}
            >
              <Edit2 className="size-4" />
            </button>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6">
            {showLoading ? (
              <Loader2 className="size-12 animate-spin text-gray-400" />
            ) : (
              <>
                <div className="mb-2">
                  <svg
                    className="size-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Drag and drop or{' '}
                  <span
                    className="cursor-pointer text-blue-500 hover:underline"
                    onClick={handleChooseFileClick}
                    role="button"
                  >
                    choose file
                  </span>{' '}
                  to upload
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  PNG or JPEG (max. {Math.floor(maxFileSize / (1024 * 1024))}MB)
                </p>
              </>
            )}
          </div>
        )}
      </div>
      <input
        id="file-input"
        type="file"
        className="hidden"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleImageChange(file)
        }}
        disabled={showLoading}
      />
    </div>
  )
}
