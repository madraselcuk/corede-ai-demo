import type { Routes } from '@/@types/routes'
import { formFullPath, formPaths } from './form.path'
import { Role } from '@/constants/roles.enum'

export const formRoutes: Routes = {
  ////////////////////////////////////////////////////////////////
  // Contact Form
  ////////////////////////////////////////////////////////////////
  [formFullPath(formPaths.contactForm.list)]: {
    key: 'landing.form.contactForm.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [formFullPath(formPaths.contactForm.create)]: {
    key: 'landing.form.contactForm.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },

  ////////////////////////////////////////////////////////////////
  // Subscription Form
  ////////////////////////////////////////////////////////////////
  [formFullPath(formPaths.subscriptionForm.list)]: {
    key: 'landing.form.subscriptionForm.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [formFullPath(formPaths.subscriptionForm.create)]: {
    key: 'landing.form.subscriptionForm.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
