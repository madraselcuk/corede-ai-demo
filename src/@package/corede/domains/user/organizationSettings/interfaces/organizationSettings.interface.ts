import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
  Currency,
  ExchangeRateMode,
  IExchangeRate,
} from "@common_package";
import { INotificationChannel } from "../../../notification";
import { IHasOptionalOrganization } from "../../organization/interfaces";
import { FileFormat } from "../enums/file-format.enum";

export interface IOrgExchangeRateSettings {
  mode: ExchangeRateMode;
  manualRates?: IExchangeRate[];
}

export interface ICommonOrganizationSettings<TUpdatedBy = IEntity> {
  timeZone: string;
  language: Language;
  locale: string;
  currency: Currency;
  exchangeRates: IOrgExchangeRateSettings;
  adjustment: number;
  dateFormat?: string;
  timeFormat?: string;
  taxRateNational?: number;
  taxRateInternational?: number;
  updateAt: Date;
  updatedBy?: TUpdatedBy;
}

export interface IInvoiceOrganizationSettings<
  TNDA = IEntity,
  TTermsCond = IEntity,
  TUpdatedBy = IEntity,
> {
  paymentMethods: string[];
  prefix: string;
  paymentPrefix: string;
  returnPrefix: string;
  followUpMailTemplate?: INotificationChannel;
  NDA?: TNDA;
  termsAndConditions?: TTermsCond;
  updateAt: Date;
  updatedBy?: TUpdatedBy;
}

export interface IEstimateOrganizationSettings<
  TNDA = IEntity,
  TTermsCond = IEntity,
  TUpdatedBy = IEntity,
> {
  prefix: string;
  followUpMailTemplate?: INotificationChannel;
  NDA?: TNDA;
  termsAndConditions?: TTermsCond;
  updateAt: Date;
  updatedBy?: TUpdatedBy;
}

export interface IProposalOrganizationSettings<
  TNDA = IEntity,
  TTermsCond = IEntity,
  TUpdatedBy = IEntity,
> {
  companyBackground?: string;
  companyReferences?: string;
  prefix: string;
  followUpMailTemplate?: INotificationChannel;
  NDA?: TNDA;
  termsAndConditions?: TTermsCond;
  updateAt: Date;
  updatedBy?: TUpdatedBy;
}

export interface IFileManagementOrganizationSettings<TUpdatedBy = IEntity> {
  allowableFileFormats: FileFormat[]; // if empty all formats are allowed
  maxFileStorageLimit: number; // 1024MB
  currentFileStorage: number; // 0MB
  maxSingleFileSize: number; // 50MB
  maxFileStorageLimitPerUser: number; // 500MB
  updateAt: Date;
  updatedBy?: TUpdatedBy;
}

export interface IBaseOrganizationSettings {
  common: ICommonOrganizationSettings;
  invoice: IInvoiceOrganizationSettings;
  estimate: IEstimateOrganizationSettings;
  proposal: IProposalOrganizationSettings;
  fileManagement: IFileManagementOrganizationSettings;
}

export interface IBaseOrganizationSettingsEntity
  extends IEntity,
    IBaseOrganizationSettings {}

export interface IOrganizationSettings
  extends IBaseOrganizationSettingsEntity,
    IHasOptionalOrganization,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
