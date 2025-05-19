import { IEntity, IHasTimeStamp, IHasOptionalUserAudit } from '@common_package';
import { NotificationType } from '../enums/notification-type.enum';
import { INotificationChannelData } from './notification-channel-data.interface';

export interface IBaseNotification {
  name: string;
  type: NotificationType;
  domain: string;
  channels: INotificationChannelData;
}

export interface IBaseNotificationEntity extends IEntity, IBaseNotification {}

export interface INotification
  extends IBaseNotificationEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
