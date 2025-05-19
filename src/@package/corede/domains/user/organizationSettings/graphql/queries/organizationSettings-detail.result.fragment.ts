// import { legalAgreementFragment } from '@corede_package';
import { baseTranslationFragment } from "@common_package";
import { gql } from "graphql-tag";

export const organizationSettingsDetailResultFragment = gql`
  ${baseTranslationFragment}

  fragment OrganizationSettingsDetailResultFragment on OrganizationSettingsDetailResult {
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
      updatedBy {
        _id
      }
    }
    invoice {
      paymentMethods
      prefix
      paymentPrefix
      returnPrefix
      followUpMailTemplate {
        type
        subject {
          ...BaseTranslationFragment
        }
        content {
          ...BaseTranslationFragment
        }
        variables
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy {
        _id
      }
    }
    estimate {
      prefix
      followUpMailTemplate {
        type
        subject {
          ...BaseTranslationFragment
        }
        content {
          ...BaseTranslationFragment
        }
        variables
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy {
        _id
      }
    }
    proposal {
      companyBackground
      companyReferences
      prefix
      followUpMailTemplate {
        type
        subject {
          ...BaseTranslationFragment
        }
        content {
          ...BaseTranslationFragment
        }
        variables
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy {
        _id
      }
    }
    fileManagement {
      allowableFileFormats
      maxFileStorageLimit
      currentFileStorage
      maxSingleFileSize
      maxFileStorageLimitPerUser
      updateAt
      updatedBy {
        _id
      }
    }

    organization {
      _id
      name
    }
  }
`;

export const commonOrgSettingsDetailResultFragment = gql`
  fragment CommonOrgSettingsDetailResultFragment on OrganizationSettingsDetailResult {
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
      updatedBy {
        _id
      }
    }
    organization {
      _id
      name
    }
  }
`;

export const invoiceOrgSettingsDetailResultFragment = gql`
  fragment InvoiceOrgSettingsDetailResultFragment on OrganizationSettingsDetailResult {
    _id
    invoice {
      paymentMethods
      prefix
      followUpMailTemplate {
        type
        subject
        content
        variables
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy {
        _id
      }
    }
    organization {
      _id
      name
    }
  }
`;

export const estimateOrgSettingsDetailResultFragment = gql`
  fragment EstimateOrgSettingsDetailResultFragment on OrganizationSettingsDetailResult {
    _id
    estimate {
      prefix
      followUpMailTemplate {
        type
        subject
        content
        variables
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy {
        _id
      }
    }
    organization {
      _id
      name
    }
  }
`;

export const proposalOrgSettingsDetailResultFragment = gql`
  fragment ProposalOrgSettingsDetailResultFragment on OrganizationSettingsDetailResult {
    _id
    proposal {
      companyBackground
      companyReferences
      prefix
      followUpMailTemplate {
        type
        subject
        content
        variables
      }
      NDA {
        _id # TODO: ...LegalAgreementFragment
      }
      termsAndConditions {
        _id # TODO: ...LegalAgreementFragment
      }
      updateAt
      updatedBy {
        _id
      }
    }
    organization {
      _id
      name
    }
  }
`;

export const fileOrgSettingsDetailResultFragment = gql`
  fragment fileOrgSettingsDetailResultFragment on OrganizationSettingsDetailResult {
    _id
    fileManagement {
      allowableFileFormats
      maxFileStorageLimit
      currentFileStorage
      maxSingleFileSize
      maxFileStorageLimitPerUser
      updateAt
      updatedBy {
        _id
      }
    }
    organization {
      _id
      name
    }
  }
`;
