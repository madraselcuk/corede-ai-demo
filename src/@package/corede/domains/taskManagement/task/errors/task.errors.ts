import { IBaseError } from '@common_package'

export const assigneeHasAlreadyChecklistItem: IBaseError = {
  code: 400,
  message: {
    en: 'Assignee has already checklistItem',
    tr: "Assignee'nın zaten checklistItem'ı var",
  },
  name: 'AssigneeHasAlreadyChecklistItem',
}

export const hourlyRateIsRequired: IBaseError = {
  code: 400,
  message: {
    en: 'HourlyRate is required',
    tr: 'HourlyRate zorunlu',
  },
  name: 'HourlyRateIsRequired',
}

export const hourlyRateCurrencyIsRequired: IBaseError = {
  code: 400,
  message: {
    en: 'HourlyRateCurrency is required',
    tr: 'HourlyRateCurrency zorunlu',
  },
  name: 'HourlyRateCurrencyIsRequired',
}

export const repeatDaysIsRequired: IBaseError = {
  code: 400,
  message: {
    en: 'RepeatDays is required',
    tr: 'RepeatDays zorunlu',
  },
  name: 'RepeatDaysIsRequired',
}

export const totalCycleIsRequired: IBaseError = {
  code: 400,
  message: {
    en: 'TotalCycle is required',
    tr: 'TotalCycle zorunlu',
  },
  name: 'TotalCycleIsRequired',
}

export const invalidChecklistItemId: IBaseError = {
  code: 400,
  message: {
    en: 'invalid checklistItemId',
    tr: 'Geçersiz checklistItemId',
  },
  name: 'InvalidChecklistItemId',
}
