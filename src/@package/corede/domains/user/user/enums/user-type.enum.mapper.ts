import { UserType } from "./user-type.enum";

/**
 * @deprecated
 */
const userTypeMapping = {
  [UserType.cocrm]: "cocrm",
  [UserType.org]: "organization",
};

/**
 * @deprecated
 */
export class UserTypeMapper {
  static getUserTypeString(value: UserType): string {
    return userTypeMapping[value];
  }
}
