import { IInsertEntity } from '@common_package';
import { IHasOptionalOrganizationId } from '../../../organization';

export interface IOrganizationChartItemUpdateInput {
  user: IInsertEntity;
  children?: Array<IOrganizationChartItemUpdateInput>;
}

export interface IOrganizationChartUpdateFilterInput
  extends IHasOptionalOrganizationId {}

export interface IOrganizationChartUpdateInput {
  chart: IOrganizationChartItemUpdateInput;
}
