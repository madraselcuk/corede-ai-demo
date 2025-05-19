import { IEntity } from "../../../../../interfaces";

export interface IBaseDomainFileCreateOwnInput {
  customName?: string;
  size: number;
  tags?: string[];
  expirationDate?: Date;
  organizationId?: string;
}

export interface IBaseDomainFileCreateInput
  extends IEntity,
    IBaseDomainFileCreateOwnInput {}

export interface IDomainFileCreateOwnInput
  extends IBaseDomainFileCreateOwnInput {
  mimeType?: string; // FileMimeType
  fileNameCustomIdentifier?: string;
}

export interface IDomainFileCreateInput
  extends IEntity,
    IDomainFileCreateOwnInput {}

export interface IDomainFileCreateOwnInputWithoutMimeType
  extends Omit<IDomainFileCreateOwnInput, "mimeType"> {}

export interface IDomainFileCreateInputWithoutMimeType
  extends IEntity,
    IDomainFileCreateOwnInputWithoutMimeType {}

export interface IDomainFileCreateOwnInputWithMimeType
  extends Omit<IDomainFileCreateOwnInput, "mimeType"> {
  mimeType: string; // FileMimeType
}

export interface IDomainFileCreateInputWithMimeType
  extends IEntity,
    IDomainFileCreateOwnInputWithMimeType {}

export interface IDomainFileCreateOwnInputWithoutCustomIdentifier
  extends Omit<IDomainFileCreateOwnInput, "fileNameCustomIdentifier"> {}

export interface IDomainFileCreateInputWithoutCustomIdentifier
  extends IEntity,
    IDomainFileCreateOwnInputWithoutCustomIdentifier {}
