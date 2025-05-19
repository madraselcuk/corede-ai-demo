import { ICommonOrganizationSettingsUpdateInput } from "./organizationSettings-update.input";

export interface IOrganizationSettingsCommonUpdateOwnInput
  extends Omit<
    ICommonOrganizationSettingsUpdateInput,
    "exchangeRates" | "adjustment"
  > {}
