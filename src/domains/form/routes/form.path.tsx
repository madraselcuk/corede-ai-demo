const baseFormPath = 'app/landing/form'

export const formPaths = {
  base: baseFormPath,
  contactForm: {
    base: `/contact-form`,
    create: `/contact-form/create`,
    detail: `/contact-form/detail`,
    list: `/contact-form/list`,
    update: `/contact-form/update`,
  },
  subscriptionForm: {
    base: `/subscription-form`,
    create: `/subscription-form/create`,
    detail: `/subscription-form/detail`,
    list: `/subscription-form/list`,
    update: `/subscription-form/update`,
  },
} as const

export function formFullPath(routePath: string): string {
  return `${formPaths.base}${routePath}`
}
