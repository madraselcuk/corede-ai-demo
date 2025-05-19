import { IEntity, IRegisterCodeCredential } from '@common_package'

export interface IUserCreateResult extends IEntity {
  /**
   * In dev or test environment this values will be returned in order to test
   */
  devMetaData?: IRegisterCodeCredential
}
