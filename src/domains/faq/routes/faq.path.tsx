import { LANDING_PREFIX_PATH } from "@/constants/route.constant"

const baseFaqPath = LANDING_PREFIX_PATH + '/faq'

export const faqPaths = {
  base: baseFaqPath,
  board: '/board',
  faq: {
    create: '/faq/create',
    detail: '/faq/detail',
    list: '/faq/list',
    update: '/faq/update',
  },
  faqCategory: {
    create: '/faq-category/create',
    update: '/faq-category/update',
    detail: '/faq-category/detail',
    list: '/faq-category/list',
  },
} as const

export function faqFullPath(routePath: string): string {
  return `${faqPaths.base}${routePath}`
}
