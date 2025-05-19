import { IBaseError } from '@common_package';

export const activeWebinarExistsError: IBaseError = {
  code: 1,
  name: 'ActiveWebinarExists',
  message: {
    en: 'Active webinar already exists',
    tr: 'Aktif vebinar bulunmaktadir.',
  },
};

export const noActiveWebinarError: IBaseError = {
  code: 2,
  name: 'NoActiveWebinar',
  message: {
    en: 'There is not any active webinar',
    tr: 'Aktif vebinar bulunmamaktadir.',
  },
};

export const webinarNotFoundError: IBaseError = {
  code: 3,
  name: 'WebinarNotFound',
  message: {
    en: 'Webinar not found',
    tr: 'Vebinar bulunamadi.',
  },
};

export const alreadyParticipatedError: IBaseError = {
  code: 4,
  name: 'AlreadyParticipated',
  message: {
    en: 'Participant has already participated',
    tr: 'Katilimci onceden katilmistir.',
  },
};

export const quotaExceededError: IBaseError = {
  code: 5,
  name: 'QuotaExceeded',
  message: {
    en: 'Webinar quota is exceeded',
    tr: 'Webinar kotasi dolmustur.',
  },
};

export const participantNotFoundError: IBaseError = {
  code: 6,
  name: 'ParticipantNotFound',
  message: {
    en: 'Participant not found',
    tr: 'Katilimci bulunamadi.',
  },
}

export const canNotDeleteWebinarWithParticipantsError: IBaseError = {
  code: 7,
  name: 'CanNotDeleteWebinarWithParticipants',
  message: {
    en: 'There are participants',
    tr: 'Katilimcilar bulunmaktadir',
  },
}
