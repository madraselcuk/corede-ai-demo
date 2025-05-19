import type { Routes } from '@/@types/routes'
import { webinarFullPath, webinarPaths } from './webinar.path'
import { Role } from '@/constants/roles.enum'

export const webinarRoutes: Routes = {
  ////////////////////////////////////////////////////////////////
  // Webinar
  ////////////////////////////////////////////////////////////////
  [webinarFullPath(webinarPaths.webinar.list)]: {
    key: 'landing.webinar.webinar.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [webinarFullPath(webinarPaths.webinar.create)]: {
    key: 'landing.webinar.webinar.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
