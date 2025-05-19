import { IPaginated } from "@common_package";
import { ICommentListItemResult } from "./comment-list.item.result";

export interface ICommentListResult extends IPaginated<ICommentListItemResult> {}
