export enum NotificationType {
  authentication = 'authentication',
  user = 'user',
  announcement = 'announcement',
  form = 'form',
  alert = 'alert',
  reminder = 'reminder',
  info = 'info',
  custom = 'custom',
}

export const userReadableNotificationTypes = [
  NotificationType.reminder,
  NotificationType.announcement,
  NotificationType.info,
];
