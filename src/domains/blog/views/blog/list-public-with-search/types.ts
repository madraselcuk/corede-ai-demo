import { IFilterBlog } from '@/@package/corede'

export interface BlogWithSearchPublicFilters
  extends Pick<IFilterBlog, 'title' | 'categoryIds'> {}
