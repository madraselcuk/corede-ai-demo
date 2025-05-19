import { NameFactory } from "../../../../factories";
import { IUser } from "../interfaces/user/IUser";

export class UserNameFactory {
  /**
   * returns fullName by merging `name` and `surname`
   */
  static getDisplayableName(params: {
    user?: IUser;
    defaultName?: string;
  }): string {
    return NameFactory.getFullName({
      name: params.user?.name,
      surname: params.user?.surname,
      defaultName: params.defaultName,
    });
  }
}
