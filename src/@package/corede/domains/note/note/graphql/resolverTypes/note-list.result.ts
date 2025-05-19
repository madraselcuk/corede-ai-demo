import { IPaginated } from "@common_package";
import { INoteListItemResult } from "./note-list.item.result";

export interface INoteListResult extends IPaginated<INoteListItemResult> {}
