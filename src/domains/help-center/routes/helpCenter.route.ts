import type { Routes } from '@/@types/routes'
import { helpCenterFullPath, helpCenterPaths } from './helpCenter.path'
import { Role } from '@/constants/roles.enum'

export const helpCenterRoutes: Routes = {
  ////////////////////////////////////////////////////////////////
  // Blog
  ////////////////////////////////////////////////////////////////
  [helpCenterFullPath(helpCenterPaths.helpCenter.list)]: {
    key: 'landing.helpCenter.helpCenter.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [helpCenterFullPath(helpCenterPaths.helpCenter.create)]: {
    key: 'landing.helpCenter.helpCenter.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },

  ////////////////////////////////////////////////////////////////
  // Help Center Category
  ////////////////////////////////////////////////////////////////
  [helpCenterFullPath(helpCenterPaths.helpCenterCategory.list)]: {
    key: 'landing.helpCenterCategory.helpCenterCategory.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [helpCenterFullPath(helpCenterPaths.helpCenterCategory.create)]: {
    key: 'landing.helpCenterCategory.helpCenterCategory.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
