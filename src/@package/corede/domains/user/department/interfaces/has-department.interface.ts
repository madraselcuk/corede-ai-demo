import { IEntity } from "@common_package";

export interface IHasOptionalDepartmentId<T = string> {
  departmentId?: T;
}
export interface IHasDepartmentId<T = string> {
  departmentId: T;
}

export interface IHasOptionalDepartment<T = IEntity> {
  department?: T;
}
export interface IHasDepartment<T = IEntity> {
  department: T;
}
