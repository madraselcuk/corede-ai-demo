import type { Routes } from '@/@types/routes'
import { taskManagementFullPath, taskManagementPaths } from './task.path'
import { Role } from '@/constants/roles.enum'

export const taskManagementRoutes: Routes = {
  [taskManagementFullPath(taskManagementPaths.task.create)]: {
    key: 'task.task.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [taskManagementFullPath(taskManagementPaths.task.detail)]: {
    key: 'task.task.detail',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [taskManagementFullPath(taskManagementPaths.task.update)]: {
    key: 'task.task.update',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [taskManagementFullPath(taskManagementPaths.task.list)]: {
    key: 'task.task.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [taskManagementFullPath(taskManagementPaths.project.create)]: {
    key: 'task.project.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [taskManagementFullPath(taskManagementPaths.project.detail)]: {
    key: 'task.project.detail',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [taskManagementFullPath(taskManagementPaths.project.list)]: {
    key: 'task.project.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  [taskManagementFullPath(taskManagementPaths.project.update)]: {
    key: 'task.project.update',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
