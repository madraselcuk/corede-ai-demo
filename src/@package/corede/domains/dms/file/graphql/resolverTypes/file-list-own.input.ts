import { IHasFilter, IHasPagination, IPagination } from '@common_package';
import { IFilterFile } from '../../interfaces';

export interface IFileListOwnInput
  extends IHasPagination<IPagination>,
    IHasFilter<IFilterFile> {}
