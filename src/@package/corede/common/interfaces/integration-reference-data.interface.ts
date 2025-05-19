import { IHasOptionalTimeStamp } from '@common_package';

export interface IIntegrationReferenceData extends IHasOptionalTimeStamp {
  referenceId?: string;
  error?: string;
}

export interface IIntegrationReferenceDataInput
  extends Omit<IIntegrationReferenceData, 'createdAt' | 'updatedAt'> {}
