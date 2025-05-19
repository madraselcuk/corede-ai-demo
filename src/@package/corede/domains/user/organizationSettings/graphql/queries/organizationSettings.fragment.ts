import { gql } from "graphql-tag";

export const organizationSettingsFragment = gql`
  fragment OrganizationSettingsFragment on OrganizationSettings {
    _id
    common {
      timeZone
      language
      locale
      dateFormat
      timeFormat
      currency
      exchangeRates {
        mode
        manualRates {
          fromCurrency
          toCurrency
          rate
          updatedAt
        }
      }
      adjustment
      taxRateNational
      taxRateInternational
      updateAt
      updatedBy
    }
    invoice {
      paymentMethods
      prefix
      paymentPrefix
      returnPrefix
      followUpMailTemplate {
        _id # TODO: Notification fragment
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy
    }
    estimate {
      prefix
      followUpMailTemplate {
        _id # TODO: Notification fragment
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy
    }
    proposal {
      companyBackground
      companyReferences
      prefix
      followUpMailTemplate {
        _id # TODO: Notification fragment
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy
    }

    organization {
      _id
      name
    }
  }
`;
