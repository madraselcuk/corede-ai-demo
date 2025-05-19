const baseNotificationPath = 'app/notification'

export const notificationPaths = {
  base: baseNotificationPath,
  board: '/board',
  notification: {
    create: '/notification/create',
    detail: '/notification/detail',
    list: '/notification/list',
    update: '/notification/update',
  },
  notificationHistory: {
    detail: '/notification-history/detail',
    list: '/notification-history/list',
  },
} as const

export function notificationFullPath(routePath: string): string {
  return `${notificationPaths.base}${routePath}`
}
