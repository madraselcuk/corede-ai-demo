/**
 *
 * @param e an object with type `enum`
 * @returns string enumeration values of enum `e`
 */
export function enumValues(e: object): string[] {
  const values = Object.keys(e).map((item: string) => {
    return (e as any)[item];
  });
  return values;
}

export function enumContains(e: object, type: string): boolean {
  return (<any>Object).values(e).includes(type);
}

export function enumIndex(e: object, status: string): number {
  return (<any>Object).values(e).indexOf(status);
}

export function enumValueCount(e: object): number {
  return (<any>Object).values(e).length;
}

export function next<T>(e: object, index: number): T | undefined {
  if (index >= enumValueCount(e) - 1) {
    return undefined;
  }
  return (<any>Object).values(e).at(index + 1);
}
