import type { Routes } from '@/@types/routes'
import { faqFullPath, faqPaths } from './faq.path'
import { Role } from '@/constants/roles.enum'

export const faqRoutes: Routes = {
  ////////////////////////////////////////////////////////////////
  // Faq
  ////////////////////////////////////////////////////////////////
  [faqFullPath(faqPaths.faq.list)]: {
    key: 'landing.faq.faq.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [faqFullPath(faqPaths.faq.create)]: {
    key: 'landing.faq.faq.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },

  ////////////////////////////////////////////////////////////////
  // Faq Category
  ////////////////////////////////////////////////////////////////
  [faqFullPath(faqPaths.faqCategory.list)]: {
    key: 'landing.faq.faqCategory.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [faqFullPath(faqPaths.faqCategory.create)]: {
    key: 'landing.faq.faqCategory.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
