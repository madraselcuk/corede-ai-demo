import { IFilterBlog } from '@/@package/corede'

export interface BlogPopularPublicFilters
  extends Pick<IFilterBlog, 'popular'> {}
