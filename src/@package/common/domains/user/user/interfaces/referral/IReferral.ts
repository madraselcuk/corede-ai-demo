import { IHasTimeStamp, IEntity } from "../../../../../interfaces";
import { ReferralStatus } from "../../enums/referral/ReferralStatus";

// TODO: look into this
export interface IReferral extends IHasTimeStamp {
  code: string;
  status: ReferralStatus;
  referrerUser?: IEntity;
  referredUsers: IEntity[];
}
