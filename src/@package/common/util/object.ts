export function hasValue(object?: any): boolean {
  return !isNullOrUndefined(object);
}

export function isNullOrUndefined(object?: any): boolean {
  return object === null || object === undefined;
}

export function isNullOrUndefinedOrEmpty(object?: string): boolean {
  return object === null || object === undefined || object === "";
}

export function isNullOrUndefinedOrEmptyObject(object?: any): boolean {
  return object === null || object === undefined || isEmptyObject(object);
}

export function isNullOrUndefinedOrFalse(object?: boolean): boolean {
  return object === null || object === undefined || object === false;
}

export function isNullOrUndefinedOrEmptyArray(array?: Array<any>): boolean {
  return (
    array === null ||
    array === undefined ||
    array.length === undefined ||
    array.length <= 0
  );
}

/** Object === {} */
export function isEmptyObject(object?: any): boolean {
  return (
    object !== null && object !== undefined && Object.keys(object).length === 0
  );
}

export function getFieldFromPath<ObjectType>(
  object: ObjectType,
  path: string
): any {
  const keys = path.split(".");
  let result: any = object;
  for (const key of keys) {
    result = result[key];
  }
  return result;
}
