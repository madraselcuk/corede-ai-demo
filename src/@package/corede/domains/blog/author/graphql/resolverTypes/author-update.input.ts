import { IEntity } from '@common_package'

export interface IAuthorUpdateFilterInput extends IEntity {}

export interface IAuthorUpdateInput {
  name?: string
  bio?: string
  linkedIn?: string
  instagram?: string
  x?: string
  facebook?: string
}
