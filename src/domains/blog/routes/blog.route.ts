import type { Routes } from '@/@types/routes'
import { blogPaths, blogFullPath } from './blog.path'
import { Role } from '@/constants/roles.enum'

export const blogRoutes: Routes = {
  ////////////////////////////////////////////////////////////////
  // Blog
  ////////////////////////////////////////////////////////////////
  [blogFullPath(blogPaths.blog.list)]: {
    key: 'landing.blog.blog.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [blogFullPath(blogPaths.blog.create)]: {
    key: 'landing.blog.blog.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },

  ////////////////////////////////////////////////////////////////
  // Author
  ////////////////////////////////////////////////////////////////
  [blogFullPath(blogPaths.author.list)]: {
    key: 'landing.blog.author.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [blogFullPath(blogPaths.author.create)]: {
    key: 'landing.blog.author.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },

  ////////////////////////////////////////////////////////////////
  // Blog Category
  ////////////////////////////////////////////////////////////////
  [blogFullPath(blogPaths.blogCategory.list)]: {
    key: 'landing.blog.blogCategory.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [blogFullPath(blogPaths.blogCategory.create)]: {
    key: 'landing.blog.blogCategory.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },

  ////////////////////////////////////////////////////////////////
  // Blog Target Category
  ////////////////////////////////////////////////////////////////
  [blogFullPath(blogPaths.blogTargetCategory.list)]: {
    key: 'landing.blog.blogTargetCategory.list',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
    },
  },
  [blogFullPath(blogPaths.blogTargetCategory.create)]: {
    key: 'landing.blog.blogTargetCategory.create',
    authority: [Role.ADMIN, Role.USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
}
