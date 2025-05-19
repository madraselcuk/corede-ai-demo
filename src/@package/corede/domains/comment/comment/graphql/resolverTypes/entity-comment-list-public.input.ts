import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterEntityComment } from "../../interfaces/comment-entity-filter.interface";

export interface IEntityCommentListPublicInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterEntityComment> {}
