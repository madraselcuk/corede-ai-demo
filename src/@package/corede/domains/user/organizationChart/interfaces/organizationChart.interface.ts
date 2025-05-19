import { IEntity, IHasTimeStamp, IHasOptionalUserAudit } from '@common_package';
import { IOrganizationChartItem } from './organizationChart-item.interface';
import { IHasOrganization, IOrganization } from '../../organization';

export interface IBaseOrganizationChart extends IHasOrganization {
  organization: IOrganization;
  chart: IOrganizationChartItem;
}

export interface IBaseOrganizationChartEntity
  extends IEntity,
    IBaseOrganizationChart {}

export interface IOrganizationChart
  extends IBaseOrganizationChartEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
