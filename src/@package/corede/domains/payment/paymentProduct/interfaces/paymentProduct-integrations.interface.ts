import { IIntegrationReferenceData } from "../../../../common";

export interface IPaymentProductIntegrations {
  iyzicoSubscriptionProduct?: IIntegrationReferenceData;
  parasutProduct?: IIntegrationReferenceData;
}

export interface IPaymentProductRecurringIntegrations {
  iyzicoSubscriptionPaymentPlan?: IIntegrationReferenceData;
}
