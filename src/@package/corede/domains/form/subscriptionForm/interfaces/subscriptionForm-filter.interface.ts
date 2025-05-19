import { Language, IDateFilter, IFilter } from "@common_package";
import { SubscriptionFormUserType } from "../enums/subscription-form-user-type.enum";
import { SubscriptionFormStatus } from "../enums/subscription-form-status.enum";
import { SubscriptionFormTopic } from "../enums/subscription-form-topic.enum";

export interface IFilterSubscriptionForm extends IFilter {
  email?: string;
  userTypes?: SubscriptionFormUserType[];
  statuses?: SubscriptionFormStatus[];
  languages?: Language[];
  userIds?: string[];
  pages?: string[];
  subscribedTopics?: SubscriptionFormTopic[];
  createdAtDateFilter?: IDateFilter;
  updatedAtDateFilter?: IDateFilter;
}
