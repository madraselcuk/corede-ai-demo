import Compressor from 'compressorjs'
import { IPreprocessedFile } from '../interfaces/preprocessed-file.interface'

export interface IImageCompressOptions {
  image: ICompressOptions
  imageThumbnail: ICompressOptions
}

export const defaultImageCompressOptions: IImageCompressOptions = {
  image: {
    quality: 0.5,
    maxWidth: 500,
  },
  imageThumbnail: {
    quality: 0.2,
    maxWidth: 200,
  },
}

export interface ICompressOptions {
  quality: number
  maxWidth?: number
}

export async function compressImage(params: {
  file: File
  compressOptions: ICompressOptions
}): Promise<File> {
  return new Promise<File>((resolve, reject) => {
    new Compressor(params.file, {
      quality: params.compressOptions.quality,
      maxWidth: params.compressOptions.maxWidth,
      mimeType: 'image/jpeg',
      success(result) {
        resolve(result as File) // TODO: find a way to return only File
      },
      error(e) {
        reject(e)
      },
    })
  })
}

export interface ICompressImageWithThumbnailParams {
  file: File
  hasThumbnail: boolean
  compressOptions?: IImageCompressOptions
}

/**
 * takes an image and compress it to two different quality one of which is used as thumbnail
 */
export async function compressImageWithThumbnail(
  params: ICompressImageWithThumbnailParams,
): Promise<IPreprocessedFile | null> {
  if (!params.file) {
    return null
  }

  const result: IPreprocessedFile = {
    image: await compressImage({
      file: params.file,
      compressOptions:
        params.compressOptions?.image ?? defaultImageCompressOptions.image,
    }),
    thumbnailImage: params.hasThumbnail
      ? await compressImage({
          file: params.file,
          compressOptions:
            params.compressOptions?.imageThumbnail ??
            defaultImageCompressOptions.imageThumbnail,
        })
      : undefined,
  }

  return result
}
