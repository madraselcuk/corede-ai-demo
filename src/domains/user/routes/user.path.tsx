const baseUserPath = ''

export const userPaths = {
  base: baseUserPath,
  account: {
    profile: '/account/profile',
  },
  organization: {
    create: '/organization/create',
    detail: '/organization/:id',
    update: '/organization/update',
    list: '/organization/list',
  },
}

export function userFullPath(routePath: string): string {
  return `${userPaths.base}${routePath}`
}
