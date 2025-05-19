import { IFileMetadata } from '@common_package'

/**
 * Placeholder values for file metadata
 * - used especially for form fields that are not yet created
 * - in create entity pages, when we select a file, we don't have the file metadata yet but we assume that the file is selected and it should be valid for zod validation
 * therefore we can use this placeholder values to pass to the form fields when file is selected in order to make sure that zod validation passes
 */
export const fileMetadataPlaceholderValues: IFileMetadata = {
  fileId: '123',
  name: 'image.jpg',
  mimeType: 'image/jpeg',
  isPrivate: false,
  s3Key: 'image.jpg',
}
