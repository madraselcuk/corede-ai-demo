export enum PermissionActionScope {
  /**
   * admin permission, will have all the scoped permissions
   */
  all = "all",
  /**
   * will have permission for only entities that is owned
   */
  own = "own",
  /**
   * organization level permission.
   */
  org = "org",
  /**
   * department level permission.
   */
  dep = "dep",
}
