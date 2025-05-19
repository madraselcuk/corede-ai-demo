const baseWebinarPath = '/webinar/webinar'

export const webinarPaths = {
  base: baseWebinarPath,
  board: '/board',
  webinar: {
    create: '/webinar/create',
    detail: '/webinar/detail',
    list: '/webinar/list',
    update: '/webinar/update',
  },

} as const

export function webinarFullPath(routePath: string): string {
  return `${webinarPaths.base}${routePath}`
}
