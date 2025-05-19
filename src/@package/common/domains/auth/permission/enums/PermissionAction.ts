export enum PermissionAction {
  all = "all",
  /**
   * create + update + delete + detail + list
   */
  manage = "manage",
  /**
   * detail + list
   */
  view = "view",
  detail = "detail",
  list = "list",
  create = "create",
  update = "update",
  delete = "delete",
  export = "export",
  import = "import",
}
