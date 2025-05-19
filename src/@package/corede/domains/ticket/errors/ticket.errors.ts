import { IBaseError } from '@common_package';

export const limitOfAssigneesExceeded: IBaseError = {
  code: 1,
  message: {
    en: 'Max 3 assignees could be added',
    tr: 'Maksimum 3 assignee eklenebilir',
  },
  name: 'LimitOfAssigneesExceeded',
};

export const assigneeIsNotOrganizationUser: IBaseError = {
  code: 1,
  message: {
    en: 'Assignee is not the current organization user',
    tr: 'Assignee şu an ki organization kullanıcısı değil',
  },
  name: 'AssigneeIsNotOrganizationUser',
};

export const assigneeIsNotDepartmentUser: IBaseError = {
  code: 1,
  message: {
    en: 'Assignee is not the current department user',
    tr: 'Assignee şu an ki department kullanıcısı değil',
  },
  name: 'AssigneeIsNotDepartmentUser',
};

export const invalidTicketTarget: IBaseError = {
  code: 1,
  message: {
    en: 'Target must be entered if targetType is not none',
    tr: 'TargetType none değilse target girilmeli',
  },
  name: 'InvalidTicketTarget',
};

export const numberOfAssigneeMustBeMoreThanZero: IBaseError = {
  code: 1,
  message: {
    en: 'Min one assignees must be added',
    tr: 'Mininum 1 assignee eklenmeli',
  },
  name: 'NumberOfAssigneeMustBeMoreThanZero',
};
