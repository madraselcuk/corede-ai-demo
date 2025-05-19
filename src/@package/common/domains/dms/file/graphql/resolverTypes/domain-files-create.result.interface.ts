import { IDomainFileCreateResult } from "./domain-file-create.result.interface";

export interface IDomainFilesCreateResult {
  files: Array<IDomainFileCreateResult>;
}
