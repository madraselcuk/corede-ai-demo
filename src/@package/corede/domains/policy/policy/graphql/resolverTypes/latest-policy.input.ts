import { PolicyDomain } from '../../enums/policy-domain.enum';
import { PolicyType } from '../../enums/policy-type.enum';
import { PolicyTarget } from '../../enums/policy-target.enum';
import { Language } from '@common_package';

export interface ILatestPolicyInput {
  domain: PolicyDomain
  type: PolicyType
  target: PolicyTarget
  language?: Language
}
