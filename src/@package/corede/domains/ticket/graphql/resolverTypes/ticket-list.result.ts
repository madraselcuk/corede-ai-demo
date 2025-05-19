import { IPaginated } from '@common_package';
import { ITicketListItemResult } from './ticket-list.item.result';

export interface ITicketListResult extends IPaginated<ITicketListItemResult> {}
