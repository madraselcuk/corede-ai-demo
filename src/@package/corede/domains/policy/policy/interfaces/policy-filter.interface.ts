import { Language, IDateFilter, IFilter } from '@common_package';
import { PolicyDomain } from '../enums/policy-domain.enum';
import { PolicyTarget } from '../enums/policy-target.enum';
import { PolicyType } from '../enums/policy-type.enum';

export interface IFilterPolicy extends IFilter {
  domains?: PolicyDomain[];
  types?: PolicyType[];
  targets?: PolicyTarget[];
  languages?: Language[];
  updatedAtDateFilter?: IDateFilter
}
