import { IExcelExportInput } from '@common_package';
import { IFilterSubscriptionForm } from '../../interfaces/subscriptionForm-filter.interface';

export interface IExportSubscriptionFormListInput extends IExcelExportInput {
  filter?: IFilterSubscriptionForm;
}
