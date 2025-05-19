import { IEntity, IFileMetadata } from '@common_package'
export interface IEntityDisplay extends IEntity {
  name: string
  image?: IFileMetadata
}
