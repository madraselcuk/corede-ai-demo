export interface IPagination {
  page?: number;
  pageSize?: number;
  sort?: any;
  // sort?: ISort;  // TODO: do this
  // multipleSortOptions?: ISingleSort[]; // TODO: for multiple sorting fields, this is a temporary solution. Try to embed in sort field of this interface. (NOTE: order in object is not preserved so multiple fields for sort object is problem)
}
