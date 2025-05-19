const baseBlogPath = 'app/landing/blog'

export const blogPaths = {
  base: baseBlogPath,
  blogBoard: '/board',
  blog: {
    create: '/blog/create',
    createFullPath: () => `/app/landing/blog/blog/create`,
    detail: '/blog/detail',
    detailFullPath: (id: string) => `/app/landing/blog/blog/detail/${id}`,
    list: '/blog/list',
    listFullPath: () => `/app/landing/blog/blog/list`,
    update: '/blog/update',
    updateFullPath: (id: string) => `/app/landing/blog/blog/update/${id}`,
  },
  author: {
    create: '/author/create',
    createFullPath: () => `/app/landing/blog/author/create`,
    update: '/author/update',
    updateFullPath: (id: string) => `/app/landing/blog/author/update/${id}`,
    detail: '/author/detail',
    detailFullPath: (id: string) => `/app/landing/blog/author/detail/${id}`,
    list: '/author/list',
    listFullPath: () => `/app/landing/blog/author/list`,
  },
  blogCategory: {
    create: '/blog-category/create',
    createFullPath: () => `/app/landing/blog/blog-category/create`,
    update: '/blog-category/update',
    updateFullPath: (id: string) =>
      `/app/landing/blog/blog-category/update/${id}`,
    detail: '/blog-category/detail',
    detailFullPath: (id: string) =>
      `/app/landing/blog/blog-category/detail/${id}`,
    list: '/blog-category/list',
    listFullPath: () => `/app/landing/blog/blog-category/list`,
  },
  blogTargetCategory: {
    create: '/blog-target-category/create',
    createFullPath: () => `/app/landing/blog/blog-target-category/create`,
    detail: '/blog-target-category/detail',
    detailFullPath: (id: string) =>
      `/app/landing/blog/blog-target-category/detail/${id}`,
    list: '/blog-target-category/list',
    listFullPath: () => `/app/landing/blog/blog-target-category/list`,
    update: '/blog-target-category/update',
    updateFullPath: (id: string) =>
      `/app/landing/blog/blog-target-category/update/${id}`,
  },
} as const

export function blogFullPath(routePath: string): string {
  return `${blogPaths.base}${routePath}`
}
