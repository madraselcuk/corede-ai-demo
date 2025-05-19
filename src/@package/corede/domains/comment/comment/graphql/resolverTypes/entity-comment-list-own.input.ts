import { IHasFilter, IHasPagination, IPagination } from "@common_package";
import { IFilterEntityCommentOwn } from "../../interfaces";

export interface IEntityCommentListOwnInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterEntityCommentOwn> {}
