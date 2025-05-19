export interface IJobResult {
  success: boolean;
  /**
   * the count of entities that are effected by the job. The effect can be delete, create, update etc.
   */
  count?: number;
}
