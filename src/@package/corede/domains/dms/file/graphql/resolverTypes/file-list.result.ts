import { IPaginated } from "@common_package";
import { IFileListItemResult } from "./file-list.item.result";

export interface IFileListResult extends IPaginated<IFileListItemResult> {}
