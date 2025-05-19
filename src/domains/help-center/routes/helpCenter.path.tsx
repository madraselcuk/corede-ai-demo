const baseHelpCenterPath = '/app/landing/help-center'

export const helpCenterPaths = {
  base: baseHelpCenterPath,
  board: '/board',
  helpCenter: {
    create: '/help-center/create',
    detail: '/help-center/detail',
    list: '/help-center/list',
    update: '/help-center/update',
  },
  helpCenterCategory: {
    create: '/help-center-category/create',
    update: '/help-center-category/update',
    detail: '/help-center-category/detail',
    list: '/help-center-category/list',
  },
} as const

export function helpCenterFullPath(routePath: string): string {
  return `${helpCenterPaths.base}${routePath}`
}
