import { IOrderCreateInput } from './order-create.input';

export interface IOrderUpdateInput extends Partial<IOrderCreateInput> {}
