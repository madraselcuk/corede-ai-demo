export const timeOfOneDay = 1000 * 86400;

export interface IExpireInDate {
  amount: string;
  unit: any;
}

export function dateToString(date?: string): string {
  if (!date) {
    return '';
  }
  return new Date(date).toISOString();
}

export function dateToDateWithoutTimeStamp(date: Date): Date {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export function now(): Date {
  return new Date();
}

export function nowAsNumber(): number {
  return new Date().getTime();
}

export function nowISOString(): string {
  return new Date().toISOString();
}

export function nowWithoutTimeStamp(): Date {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

export function nextYearWithoutTimeStamp(): Date {
  const now = new Date();
  return new Date(
    now.getUTCFullYear() + 1,
    now.getUTCMonth(),
    now.getUTCDate(),
  );
}

/**
 * converts expiresIn value (e.g. 50, '60m') to `IExpireInDate`
 * @param expInDate 
 * @returns 
 */
export function toIExpireDate(expInDate: string | number): IExpireInDate {
  let amount = '0';
  let unit = 's';
  if (typeof expInDate === 'string') {
    validateExpireInDate(expInDate);
    amount = expInDate.slice(0, expInDate.length - 1);
    unit = expInDate.at(expInDate.length - 1) ?? 's';
  } else {
    amount = `${expInDate}`;
  }

  return {
    amount: amount,
    unit: unit,
  };
}

function validateExpireInDate(expInDate: string): boolean {
  if (!expInDate || expInDate.length < 2) {
    throw new Error('InvalidExpInDate');
  }
  // TODO: implement
  return true;
}

export function addDays(date: Date, days: number): Date {
  const resultingDate = new Date(date);
  resultingDate.setDate(resultingDate.getDate() + days);
  return resultingDate;
}
export function addDaysAsNumber(date: Date, days: number): number {
  const newDate = new Date(date).setDate(date.getDay() + days);
  return newDate;
}

export function subtractDays(date: Date, days: number): Date {
  const resultingDate = new Date(date);
  resultingDate.setDate(resultingDate.getDate() - days);
  return resultingDate;
}
export function subtractDaysAsNumber(date: Date, days: number): number {
  const newDate = new Date(date).setDate(date.getDay() - days);
  return newDate;
}
export function addHours(date: Date, hours: number): Date {
  const resultingDate = new Date(date);
  resultingDate.setHours(resultingDate.getHours() + hours);
  return resultingDate;
}
export function addHoursAsNumber(date: Date, hours: number): number {
  const newDate = new Date(date).setDate(date.getHours() + hours);
  return newDate;
}
