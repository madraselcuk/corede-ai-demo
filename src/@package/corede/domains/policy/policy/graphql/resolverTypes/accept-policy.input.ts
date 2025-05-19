import { PolicyDomain, PolicyTarget, PolicyType } from '../../enums';

export interface IAcceptPolicyInput {
  domain: PolicyDomain;
  type: PolicyType;
  target: PolicyTarget;
}
