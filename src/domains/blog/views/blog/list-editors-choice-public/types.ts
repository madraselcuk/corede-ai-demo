import { IFilterBlog } from '@/@package/corede'

export interface BlogEditorsChoicePublicFilters
  extends Pick<IFilterBlog, 'editorsChoice'> {}
