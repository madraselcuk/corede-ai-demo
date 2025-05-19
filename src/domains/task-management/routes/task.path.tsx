const baseTaskManagementPath = 'app/task-management'

export const taskManagementPaths = {
  base: baseTaskManagementPath,
  board: '/board',
  task: {
    create: '/task/create',
    detail: '/task/detail',
    list: '/task/list',
    update: '/task/update',
  },
  project: {
    create: '/project/create',
    detail: '/project/detail',
    list: '/project/list',
    update: '/project/update',
  },
}

export function taskManagementFullPath(routePath: string): string {
  return `${taskManagementPaths.base}${routePath}`
}
