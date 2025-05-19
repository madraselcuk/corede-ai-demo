import { IPaginated } from '@common_package';
import { IPolicyResult } from './policy.result';

export interface IPoliciesResult extends IPaginated<IPolicyResult> {}
