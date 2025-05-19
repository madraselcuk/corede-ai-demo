import { SubscriptionFormCreateUserType } from './subscription-form-create-user-type.enum';
import { SubscriptionFormUserType } from './subscription-form-user-type.enum';

export class SubscriptionFormUserTypeFactory {
  static fromSubscriptionFormCreateUserType(
    userType?: SubscriptionFormCreateUserType,
  ): SubscriptionFormUserType {
    switch (userType) {
      case SubscriptionFormCreateUserType.individual:
        return SubscriptionFormUserType.individual;

      case SubscriptionFormCreateUserType.business:
        return SubscriptionFormUserType.business;

      default:
        return SubscriptionFormUserType.individual;
    }
  }
}
