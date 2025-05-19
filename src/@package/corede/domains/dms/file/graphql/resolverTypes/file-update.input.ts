import { IEntity } from "@common_package";

export interface IFileUpdateFilterInput extends IEntity {}

export interface IFileUpdateInput {
  customName?: string;
  tags?: string[];
  expirationDate?: Date;
  downloadCount?: number;
  entityId?: string;
}
