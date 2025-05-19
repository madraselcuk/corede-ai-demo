import { Gender, Language } from '@common_package'
import { EnumTranslationHelper } from './enum.translation.helper'
import { SelectItemProps } from '@/components/interface'

export class EnumTranslationFactory {
  static enumOptions<T extends object>(params: {
    enumObj: T
    enumName: string
    namespace?: string
  }): SelectItemProps<string>[] {
    const result = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum(
      {
        enumObj: params.enumObj,
        enumName: params.enumName,
        namespace: params.namespace,
      },
    )

    return result
  }

  /**
   * @returns translated enum name
   */
  static enumValue(params: {
    enumName: string
    enumValue: string
    namespace?: string
  }): string {
    return EnumTranslationHelper.getTranslatedEnumValue({
      enumName: params.enumName,
      enumValue: params.enumValue,
      namespace: params.namespace,
    })
  }

  // Common enum types

  static get languageEnumOptions(): SelectItemProps<string>[] {
    const result = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum(
      {
        enumObj: Language,
        enumName: 'language',
      },
    )

    return result
  }

  /**
   * @returns translated language name
   */
  static language(language: Language): string {
    return EnumTranslationHelper.getTranslatedEnumValue({
      enumName: 'language',
      enumValue: language,
    })
  }

  static get genderEnumOptions(): SelectItemProps<string>[] {
    const result = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum(
      {
        enumObj: Gender,
        enumName: 'gender',
      },
    )

    return result
  }

  static gender(gender: Gender): string {
    return EnumTranslationHelper.getTranslatedEnumValue({
      enumName: 'gender',
      enumValue: gender,
    })
  }
}
