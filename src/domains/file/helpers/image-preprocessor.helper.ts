import { IPreprocessedFile } from "../interfaces/preprocessed-file.interface"
import {
  compressImageWithThumbnail,
  IImageCompressOptions
} from "../util/image-compressor.util"

export interface IPreprocessImage {
  selectedImageFile: File | null
  hasThumbnail: boolean
  compressOptions?: IImageCompressOptions
}

/**
 * prepares image to be uploaded
 */
export async function preprocessImage(
  params: IPreprocessImage
): Promise<IPreprocessedFile | null> {
  if (!params.selectedImageFile) {
    return null
  }

  // Compress the image and its thumbnail
  const compressedImages = await compressImageWithThumbnail({
    file: params.selectedImageFile,
    hasThumbnail: params.hasThumbnail,
    compressOptions: params.compressOptions
  })

  return compressedImages
}
