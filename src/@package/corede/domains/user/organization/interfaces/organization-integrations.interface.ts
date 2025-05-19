import { IHasOptionalTimeStamp } from "@common_package";
import { IIntegrationReferenceData } from "../../../../common";

export interface IIyzicoCardReferenceData {
  cardToken: string;
  createdAt: Date;
}

export interface IIyzicoCardUserReferenceData extends IHasOptionalTimeStamp {
  cardUserKey: string;
  cards: IIyzicoCardReferenceData[];
}

export interface IOrganizationIntegrations {
  parasutCustomer?: IIntegrationReferenceData;
  iyzicoUserCard?: IIyzicoCardUserReferenceData;
}
