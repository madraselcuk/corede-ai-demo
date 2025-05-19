import { IPagination } from "./pagination.interface";

export interface IHasPagination<T = IPagination> {
  pagination?: T;
}
