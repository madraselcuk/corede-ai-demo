import {
  IContactInfo,
  IInsertContactInfo,
  IUpdateContactInfo,
} from "./contact-info.interface";

export interface IHasContactInfo {
  contact: IContactInfo;
}

export interface IInsertHasContactInfo {
  contact?: IInsertContactInfo;
}

export interface IUpdateHasContactInfo {
  contact?: IUpdateContactInfo;
}
