import { IUser } from "@common_package";

export interface IUserListByRelatedItemResult
  extends Pick<IUser, "_id" | "name" | "surname" | "profileImage"> {}
