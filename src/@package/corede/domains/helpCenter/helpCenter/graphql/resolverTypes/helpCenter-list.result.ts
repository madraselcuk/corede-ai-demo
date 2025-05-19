import { IPaginated } from '@common_package';
import { IBaseHelpCenterEntity } from '../../interfaces/helpCenter.interface';

export interface IHelpCenterListItemResult extends IBaseHelpCenterEntity {}

export interface IHelpCenterListResult
  extends IPaginated<IHelpCenterListItemResult> {}
