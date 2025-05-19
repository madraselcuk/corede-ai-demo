import {
  IEntityFileAssignInput,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
  IEntityFilesAssignInput,
  IFileMetadata,
} from '@common_package'

/**
 * links file to a document - updates fileMetadata of the user
 * @note there are 2 kinds of assign:
 * - First is to assign own. This will assign the file to the creator user
 * - Second is to assign some other entity. This will assign the file to an entity. For this assignment there no single assignment end point: `assignFileAssignMany` will be used for single assignments
 */
export async function assignFileOwn(params: {
  fileAssignOwnQuery: any
  fileMetadata: IFileMetadata
}): Promise<void> {
  console.log('assignFileOwn', params.fileMetadata)
  const input: IEntityFileAssignOwnInput = {
    file: params.fileMetadata,
  }

  const response = await params.fileAssignOwnQuery({
    input: input,
  })

  const createFileResult = response?.data as IEntityFileAssignResult

  if (!createFileResult) {
    throw new Error('assign file own fileMetadata failed')
  }
}

/**
 * links file to a document - updates fileMetadata of the entity
 */
export async function assignFileToEntity(params: {
  entityId: string
  fileAssignToEntityQuery: any
  fileMetadata: IFileMetadata
}): Promise<void> {
  console.log('assignFileToEntity', params.fileMetadata)
  const input: IEntityFileAssignInput = {
    _id: params.entityId,
    file: params.fileMetadata,
  }

  const response = await params.fileAssignToEntityQuery({
    input: input,
  })

  const createFileResult = response?.data as IEntityFileAssignResult

  if (!createFileResult) {
    throw new Error('assign file to entity failed')
  }
}

/**
 * links files to a documents - updates fileMetadatas of the entity
 */
export async function assignFileAssignMany(params: {
  entityId: string
  fileAssignManyQuery: any
  fileMetadataList: IFileMetadata[]
}): Promise<void> {
  try {
    const input: IEntityFilesAssignInput = {
      _id: params.entityId,
      files: params.fileMetadataList,
    }

    const result = await params.fileAssignManyQuery({
      input: input,
    })
    if (!result) {
      throw new Error('assign file to entity failed')
    }
  } catch (error: any) {
    throw new Error(`assign file to entity failed: error: ${error.message}`)
  }
}
