import { IDateFilter, IFilter } from "@common_package";
import { OrderStatus, OrderTarget } from "../enums";
import { IHasOptionalOrganizationId } from "../../../user";

export interface IFilterOrder extends IFilter, IHasOptionalOrganizationId {
  orderTarget?: OrderTarget;
  orderStatuses?: OrderStatus[];
  orderedUserIds?: string[];
  productId?: string;
  updatedAtDateFilter?: IDateFilter;
}
