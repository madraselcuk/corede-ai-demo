import { IBaseError } from '@common_package';

export const invalidEndTimeOfAppointment: IBaseError = {
  code: 1,
  message: {
    en: 'endTime of appointment must be after startTime',
    tr: 'endTime of appointment must be after startTime',
  },
  name: 'invalidEndTimeOfAppointment',
};

export const invalidStartTimeOfAppointment: IBaseError = {
  code: 1,
  message: {
    en: 'startTime of appointment must be after startTime',
    tr: 'startTime of appointment must be after startTime',
  },
  name: 'invalidStartTimeOfAppointment',
};

export const appointmentMustBeScheduledOrPostponed: IBaseError = {
  code: 1,
  message: {
    en: 'Appointment status must be scheduled and postponed to change starTime',
    tr: 'Appointment status must be scheduled and postponed to change starTime',
  },
  name: 'appointmentMustBeScheduledOrPostponed',
};
