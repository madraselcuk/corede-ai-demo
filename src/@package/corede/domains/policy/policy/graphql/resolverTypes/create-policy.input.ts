import { Language } from '@common_package';
import { PolicyDomain } from '../../enums/policy-domain.enum';
import { PolicyTarget } from '../../enums/policy-target.enum';
import { PolicyType } from '../../enums/policy-type.enum';

export interface ICreatePolicyInput {
  title: string;
  content: string;
  domain: PolicyDomain;
  type: PolicyType;
  target: PolicyTarget;
  language: Language;
  versionCount?: number
}
