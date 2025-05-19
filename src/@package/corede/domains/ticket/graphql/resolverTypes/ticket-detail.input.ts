import { IEntity } from '@common_package';

// TODO IEntity type is used for business entities. But here, using it inside a input is not right way.
export interface ITicketDetailInput extends Partial<IEntity> {
  name?: string;
}
