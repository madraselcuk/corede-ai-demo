import {
  IDomainFileCreateInput,
  IDomainFileCreateResult,
} from '@common_package'

/**
 * creates file from backend - gets fileMetadata and presignedUrl
 * - this api is used for image creation that does not require a target entity.
 */
export async function createFileForEntity(params: {
  fileCreateForEntityQuery: any
  fileInput: IDomainFileCreateInput
}): Promise<IDomainFileCreateResult> {
  const input: IDomainFileCreateInput = {
    ...params.fileInput,
    size: params.fileInput.size / 1024, // The size in the backend is in the KB format.
  }

  const response = await params.fileCreateForEntityQuery({
    input: input,
  })

  const createFileResult = response?.data as IDomainFileCreateResult

  if (!createFileResult) {
    throw new Error('create file own fileMetadata and presigned url failed')
  }

  return createFileResult
}
