import { IFileMetadata } from '@common_package'
import { IPreprocessImage } from './image-preprocessor.helper'

export interface ISaveImage {
  selectedImageFile: any // TODO: infer and create type for ICompressImageWithThumbnailResult
  imageCreateQuery: any
  imageAssignQuery?: any
  willAssign: boolean
}

export interface ISaveImageResult {
  fileMetadata: IFileMetadata
}

export interface ISaveImageByPreprocessing extends IPreprocessImage {
  imageCreateQuery: any
  imageAssignQuery?: any
  willAssign: boolean
}
