import {
  compressImageWithThumbnail,
} from '@/domains/file/util/image-compressor.util'
import {
  ISaveImage,
  ISaveImageByPreprocessing,
  ISaveImageResult,
} from './image-save.helper'
import {
  assignFileToEntity,
  createFileOwn,
  uploadImageToS3WithThumbnail,
} from '@api_package'

////////////////////////////////////////////////////////////////
// Save Image
////////////////////////////////////////////////////////////////

export interface ISaveImageToEntity extends ISaveImage {
  entityId: string
}

export async function saveImageToEntity(
  params: ISaveImageToEntity,
): Promise<ISaveImageResult | undefined> {
  if (!params.selectedImageFile?.image) {
    return
  }

  // Create image from backend and obtained fileMetadata
  // FileMetadata contains presigned url to upload image and image thumbnail
  const result = await createFileOwn({
    fileCreateOwnQuery: params.imageCreateQuery,
    fileInput: {
      mimeType: params.selectedImageFile?.image.type,
      size: params.selectedImageFile?.image.size,
      customName: (params.selectedImageFile?.image as File)?.name,
    },
  })

  await uploadImageToS3WithThumbnail({
    image: {
      file: params.selectedImageFile?.image,
      presignedUrl: result.presignedUrl.uploadPresignedUrl,
    },
    thumbnailImage:
      params.selectedImageFile?.imageThumbnail &&
      result.presignedUrl.uploadThumbnailPresignedUrl
        ? {
            file: params.selectedImageFile?.imageThumbnail,
            presignedUrl: result.presignedUrl.uploadThumbnailPresignedUrl,
          }
        : undefined,
  })

  if (!result?.fileMetadata) return

  /**
   * assign the created and uploaded image's fileMetadata to corresponding entity if necessary
   * - assignment :
   * - 1: update related document with fileMetadata
   * - 2: update file's related entity id
   */
  if (params.willAssign && params.imageAssignQuery) {
    await assignFileToEntity({
      entityId: params.entityId,
      fileAssignToEntityQuery: params.imageAssignQuery,
      fileMetadata: result?.fileMetadata,
    })
  }

  return {
    fileMetadata: result?.fileMetadata,
  }
}

////////////////////////////////////////////////////////////////
// Save Image By Preprocessing
////////////////////////////////////////////////////////////////

export interface ISaveImageByPreprocessingToEntity
  extends ISaveImageByPreprocessing {
  entityId: string
}

export async function saveImageByPreprocessingToEntity(
  params: ISaveImageByPreprocessingToEntity,
): Promise<ISaveImageResult | undefined> {
  if (!params.selectedImageFile) {
    return
  }

  // Compress the image and its thumbnail
  const compressedImages = await compressImageWithThumbnail({
    file: params.selectedImageFile,
    hasThumbnail: params.hasThumbnail,
    compressOptions: params.compressOptions,
  })

  if (!compressedImages?.image) return

  return await saveImageToEntity({
    selectedImageFile: compressedImages,
    imageCreateQuery: params.imageCreateQuery,
    imageAssignQuery: params.imageAssignQuery,
    willAssign: params.willAssign,
    entityId: params.entityId,
  })
}
