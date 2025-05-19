import {
  FileContentType,
  FileExtension,
  IDateFilter,
  IFilter,
  INumberIntervalFilter,
} from "@common_package";
import { IHasOptionalOrganizationId } from "../../../user";
import { FileStorageImpact } from "../enums";

export interface IFilterFile extends IFilter, IHasOptionalOrganizationId {
  customName?: string;
  name?: string;
  createdAtDateFilter?: IDateFilter;
  updatedAtDateFilter?: IDateFilter;
  /**
   * values: FileMimeType
   */
  mimeTypes?: string[];
  storageImpacts?: FileStorageImpact[];
  extensions?: FileExtension[];
  types?: FileContentType[];
  sizeIntervalFilter?: INumberIntervalFilter;
  tags?: string[];
  folder?: string;
  expirationDateFilter?: IDateFilter;
  downloadCountIntervalFilter?: INumberIntervalFilter;
  entityId?: string;
  entityModels?: string[];
  entityFieldNames?: string[];
  isPrivate?: boolean;
  hasEntity?: boolean;
}
