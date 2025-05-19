export type TFilter<T = any> = TFilterQuery<T>;

export type TFilterQuery<T> = {
  [P in keyof T]?: T[P] | {
    $eq?: T[P];
    $gt?: T[P];
    $gte?: T[P];
    $in?: T[P][];
    $lt?: T[P];
    $lte?: T[P];
    $ne?: T[P];
    $nin?: T[P][];
  };
};