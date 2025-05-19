import type { Routes } from '@/@types/routes'
import { notificationFullPath, notificationPaths } from './notification.path'
import { Role } from '@/constants/roles.enum'

export const notificationRoutes: Routes = {
  ////////////////////////////////////////////////////////////////
  // Faq
  ////////////////////////////////////////////////////////////////
  [notificationFullPath(notificationPaths.notification.list)]: {
    key: 'notification.notification.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [notificationFullPath(notificationPaths.notification.create)]: {
    key: 'notification.notification.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [notificationFullPath(notificationPaths.notificationHistory.list)]: {
    key: 'notification.notificationHistory.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
