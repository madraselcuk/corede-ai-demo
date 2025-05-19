import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
} from '@common_package';
import { PolicyDomain } from '../enums/policy-domain.enum';
import { PolicyType } from '../enums/policy-type.enum';
import { PolicyTarget } from '../enums/policy-target.enum';

export interface IBasePolicy {
  title: string;
  content: string;
  domain: PolicyDomain;
  type: PolicyType;
  target: PolicyTarget;
  language: Language;
  versionCount: number;
}

export interface IBasePolicyEntity extends IEntity, IBasePolicy {}

export interface IPolicy
  extends IBasePolicyEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
