import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterEntityComment } from "../../interfaces/comment-entity-filter.interface";

export interface IEntityCommentListInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterEntityComment> {
  /**
   * Entity comment listing can be done on a specific target
   * so that target Id must be provided.
   * For example: list of all comments on an estimate with id `x`
   */
  targetId: string;
}
