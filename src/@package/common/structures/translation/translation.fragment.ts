import gql from "graphql-tag";

export const baseTranslationFragment = gql`
  fragment BaseTranslationFragment on BaseTranslationType {
    en
    tr
    de
    es
    fr
    it
    pt
    ru
  }
`;

export const translationFragment = gql`
  fragment TranslationFragment on TranslationType {
    en
    tr
    de
    es
    fr
    it
    pt
    ru
  }
`;

export const optionalTranslationFragment = gql`
  fragment OptionalTranslationFragment on OptionalTranslationType {
    en
    tr
    de
    es
    fr
    it
    pt
    ru
  }
`;
