import { IBaseError } from "@common_package";

export const invalidRemindDate: IBaseError = {
  code: 1001,
  name: "invalidRemindDate",
  message: {
    en: "The remind date can not be a past date",
    tr: "Hatirlatma tarihi geçmişte bir tarih olamaz",
  },
};

export const reminderMustBeUnScheduledOrScheduled: IBaseError = {
  code: 1001,
  name: "reminderMustBeUnScheduled",
  message: {
    en: "Reminder status must be unscheduled or scheduled",
    tr: "Hatırlatıcı durumu planlanmadı yada planlandı olmalı",
  },
};

export const reminderMustBeScheduledOrInprogress: IBaseError = {
  code: 1001,
  name: "reminderMustBeUnScheduled",
  message: {
    en: "Reminder status must be unscheduled or inprogress",
    tr: "Hatırlatıcı durumu planlandı yada ilerlemede olmalı",
  },
};
