import { TOptional } from "../types";

export class Validator {
  static isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }

  static isNullOrUndefinedOrEmptyString(value: TOptional<string>): boolean {
    return value === null || value === undefined || value === "";
  }

  static isNullOrUndefinedOrEmptyArray(value: TOptional<Array<any>>): boolean {
    return value === null || value === undefined || value.length === 0;
  }

  static hasValue(value: any): boolean {
    return !this.isNullOrUndefined(value);
  }
}
