import type { Routes } from '@/@types/routes'
import { userPaths } from './user.path'
import { Role } from '@/constants/roles.enum'

export const userRoutes: Routes = {
  ////////////////////////////////////////////////////////////////
  // Account
  ////////////////////////////////////////////////////////////////
  [`${userPaths.base}${userPaths.account.profile}`]: {
    key: 'account.profile',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [`${userPaths.base}${userPaths.organization.create}`]: {
    key: 'organization.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [`${userPaths.base}${userPaths.organization.detail}`]: {
    key: 'organization.detail',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [`${userPaths.base}${userPaths.organization.list}`]: {
    key: 'organization.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [`${userPaths.base}${userPaths.organization.update}`]: {
    key: 'organization.update',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
}
