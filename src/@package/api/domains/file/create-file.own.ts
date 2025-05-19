import {
  IDomainFileCreateOwnInput,
  IDomainFileCreateResult,
  IDomainFilesCreateOwnInput,
  IDomainFilesCreateResult,
} from '@common_package'

/**
 * creates file from backend - gets fileMetadata and presignedUrl
 * - this api is used for image creation that does not require a target entity.
 */
export async function createFileOwn(params: {
  fileCreateOwnQuery: any
  fileInput: IDomainFileCreateOwnInput
}): Promise<IDomainFileCreateResult> {
  const input: IDomainFileCreateOwnInput = {
    ...params.fileInput,
    size: params.fileInput.size / 1024, // The size in the backend is in the KB format.
  }

  const response = await params.fileCreateOwnQuery({
    input: input,
  })

  const createFileResult = response?.data as IDomainFileCreateResult

  if (!createFileResult) {
    throw new Error('create file own fileMetadata and presigned url failed')
  }

  return createFileResult
}

/**
 * creates files from backend - gets fileMetadata and presignedUrl
 */
export async function createFileOwnMany(params: {
  fileCreateManyQuery: any
  fileListInput: IDomainFilesCreateOwnInput
}): Promise<Array<IDomainFileCreateResult>> {
  const input: IDomainFilesCreateOwnInput = {
    inputs: params.fileListInput.inputs.map((f) => {
      return {
        ...f,
        size: f.size / 1024, // The size in the backend is in the KB format.
      }
    }),
  }

  const response = await params.fileCreateManyQuery({
    input: input,
  })

  const createFilesResult = response?.data as IDomainFilesCreateResult

  if (
    !createFilesResult?.files ||
    createFilesResult?.files.length === 0 ||
    !createFilesResult?.files.at(0)
  ) {
    throw new Error('create files fileMetadata and presigned url failed')
  }

  return createFilesResult.files
}
