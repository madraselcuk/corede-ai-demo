import type { Routes } from '@/@types/routes'
import { Role } from '@/constants/roles.enum'

const homeRoute: Routes = {
  '/app/home': {
    key: 'home',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}

export default homeRoute
