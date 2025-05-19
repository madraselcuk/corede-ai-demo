import { PolicyDomain, PolicyTarget, PolicyType } from '../../enums';

export interface IIsPolicyAcceptedInput {
  domain: PolicyDomain;
  type: PolicyType;
  target: PolicyTarget;
}
