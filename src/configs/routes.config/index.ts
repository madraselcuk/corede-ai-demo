import type { Routes } from '@/@types/routes'
import landingRoute from './landingRoute'
import homeRoute from './homeRoute'
import authRoute from './authRoute'
import publicRoute from './publicRoute'
import otherRoute from './otherRoute'
import { userRoutes } from '@/domains/user/routes/user.route'
import { notificationRoutes } from '@/domains/notification/routes/notification.route'
import { taskManagementRoutes } from '@/domains/task-management/routes/task.route'

export const protectedRoutes: Routes = {
  ...landingRoute,
  ...homeRoute,
  ...otherRoute,
  ...userRoutes,
  ...notificationRoutes,
  ...taskManagementRoutes,
}

export const publicRoutes: Routes = {
  ...publicRoute,
}

export const authRoutes = authRoute
