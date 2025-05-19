import { IDepartment } from "../../interfaces";

export interface IDepartmentListByRelatedItemResult
  extends Pick<IDepartment, "_id" | "name"> {}
