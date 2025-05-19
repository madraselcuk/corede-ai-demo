import { IHasOrganizationId } from "../../../organization/interfaces";
import { FileFormat } from "../../enums";
import {
  ICommonOrganizationSettings,
  IEstimateOrganizationSettings,
  IInvoiceOrganizationSettings,
  IOrgExchangeRateSettings,
  IProposalOrganizationSettings,
} from "../../interfaces";

export interface IOrgExchangeRateSettingsUpdateInput
  extends Partial<IOrgExchangeRateSettings> {}

export interface ICommonOrganizationSettingsUpdateInput
  extends Omit<
    Partial<ICommonOrganizationSettings>,
    "exchangeRates" | "updatedBy" | "updatedAt"
  > {
  exchangeRates?: IOrgExchangeRateSettingsUpdateInput;
}

export interface IInvoiceOrganizationSettingsUpdateInput
  extends Omit<
    Partial<IInvoiceOrganizationSettings>,
    "NDA" | "termsAndConditions" | "updatedBy" | "updatedAt"
  > {
  NDAId?: string;
  termsAndConditionsId?: string;
}

export interface IEstimateOrganizationSettingsUpdateInput
  extends Omit<
    Partial<IEstimateOrganizationSettings>,
    "NDA" | "termsAndConditions" | "updatedBy" | "updatedAt"
  > {
  NDAId?: string;
  termsAndConditionsId?: string;
}

export interface IProposalOrganizationSettingsUpdateInput
  extends Omit<
    Partial<IProposalOrganizationSettings>,
    "NDA" | "termsAndConditions" | "updatedBy" | "updatedAt"
  > {
  NDAId?: string;
  termsAndConditionsId?: string;
}

export interface IFileManagementOrganizationSettingsUpdateInput {
  allowableFileFormats?: FileFormat[];
}

export interface IOrganizationSettingsUpdateFilterInput
  extends IHasOrganizationId {}

export interface IOrganizationSettingsUpdateInput {
  common?: ICommonOrganizationSettingsUpdateInput;
  invoice?: IInvoiceOrganizationSettingsUpdateInput;
  estimate?: IEstimateOrganizationSettingsUpdateInput;
  proposal?: IProposalOrganizationSettingsUpdateInput;
  fileManagement?: IFileManagementOrganizationSettingsUpdateInput;
}
