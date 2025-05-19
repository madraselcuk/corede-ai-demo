/**
 * @value `user` ***NOT_ACTIVE*** : Files uploaded by users, count towards storage of a specific user.
 * @value `system` : System-defined files, don't count towards storage.
 * @value `shared` ***NOT_ACTIVE*** : Files shared across users/entities, may not count.
 * @value `organization` : Files shared across organization, count towards storage of a specific organization.
 * @value `archived` ***NOT_ACTIVE*** : Archived files, depending on policy, may not count.
 * @value `backup` ***NOT_ACTIVE*** : Backup files excluded from quota calculations.
 * @value `temporary` ***NOT_ACTIVE*** : Temporary files, typically excluded.
 * @value `premium` ***NOT_ACTIVE*** : Premium-tier files, excluded due to subscription benefits.
 */
export enum FileStorageImpact {
  // user = "user", // Files uploaded by users, count towards storage of a specific user.
  system = "system", // System-defined files, don't count towards storage.
  // shared = "shared", // Files shared across users/entities, may not count.
  organization = "organization", // Files shared across organization, count towards storage of a specific organization.
  // archived = "archived", // Archived files, depending on policy, may not count.
  // backup = "backup", // Backup files excluded from quota calculations.
  // temporary = "temporary", // Temporary files, typically excluded.
  // premium = "premium", // Premium-tier files, excluded due to subscription benefits.
}
