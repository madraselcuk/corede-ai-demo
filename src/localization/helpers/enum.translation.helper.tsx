import { enumValues } from '@common_package'
import i18n from '../i18next'
import { TranslationResourceNamespace } from '../resources'
import { TFunction } from '../types'
import { SelectItemProps } from '@/components/interface'
import { toLowerCaseFirstChar } from '@/utils/string.utilities'

export interface EnumValueTranslationParams {
  t?: TFunction
  enumName: string
  enumValue: string | number
  namespace?: string
}

export interface EnumTranslationParams<T extends object> {
  enumObj: T
  enumName: string
  namespace?: string
}

export const EnumTranslationHelper = {
  /**
   * in default behavior: enums are inserted into src/localization/locales/ using the name of the enum.
   * example: in en.ts file { enums: { language: { turkish: "turkish" } } }
   * @returns converts enum to an object
   */
  convertEnums<T extends object>(
    params: EnumTranslationParams<T>,
  ): { [key in keyof T]: string } {
    const result: { [key in keyof T]: string } = {} as {
      [key in keyof T]: string
    }

    for (const key of Object.keys(params.enumObj) as Array<keyof T>) {
      if (Object.prototype.hasOwnProperty.call(params.enumObj, key)) {
        const enumValue = params.enumObj[key]
        result[key] = EnumTranslationHelper.getTranslatedEnumValue({
          enumName: params.enumName,
          enumValue: enumValue as string,
          namespace: params.namespace,
        })
      }
    }

    return result
  },

  /**
   * @returns translation of a value of an enum
   */
  getTranslatedEnumValue(params: EnumValueTranslationParams): string {
    const namespace = params.namespace ?? TranslationResourceNamespace.common
    const enumValue = params.enumValue.toString()

    const key =
      namespace === TranslationResourceNamespace.common
        ? `enums:${toLowerCaseFirstChar(params.enumName)}.${enumValue}`
        : `${namespace}:enums.${toLowerCaseFirstChar(params.enumName)}.${enumValue}`

    return i18n.t(key)
  },

  /**
   * @returns all translated values of an enum as SelectItemProps
   */
  getTranslatedEnumValues<T extends string | number>(
    enumName: string,
    enumValues: Record<string, T>,
    namespace?: string,
  ) {
    return Object.entries(enumValues).map(([key, value]) => ({
      label: this.getTranslatedEnumValue({
        enumName,
        enumValue: key,
        namespace,
      }),
      value: value,
    }))
  },

  /**
   * @returns all translations of values of an enum as array of AutoCompleteOption (contains enum value as id and enum value translation as name)
   */
  generateSelectOptionsForTranslatedEnum<T extends object>(
    params: EnumTranslationParams<T>,
  ): SelectItemProps<string>[] {
    return enumValues(params.enumObj).map((value: any) => ({
      label: EnumTranslationHelper.getTranslatedEnumValue({
        enumName: params.enumName,
        enumValue: value,
        namespace: params.namespace,
      }),
      value: value,
    }))
  },

  /**
   * @returns all translations of values of an enum as array of AutoCompleteOption (contains enum value as id and enum value translation as name). Removes values without permissions.
   */
  generateSelectOptionsForTranslatedEnumWithPermissions<T extends object>(
    params: EnumTranslationParams<T> & {
      valuesWithoutPermissions: string[]
    },
  ): SelectItemProps<string>[] {
    const values = enumValues(params.enumObj).map((value: any) => ({
      label: EnumTranslationHelper.getTranslatedEnumValue({
        enumName: params.enumName,
        enumValue: value,
        namespace: params.namespace,
      }),
      value,
    }))
    if (
      !params.valuesWithoutPermissions ||
      params.valuesWithoutPermissions.length === 0
    ) {
      return values
    }
    return EnumTranslationHelper.removeOptionWithoutPermission(
      values,
      params.valuesWithoutPermissions,
    )
  },

  removeOptionWithoutPermission(
    options: SelectItemProps<string>[],
    valuesWithoutPermissions: string[],
  ): SelectItemProps<string>[] {
    return options.filter(
      (option) => !valuesWithoutPermissions.includes(option.value),
    )
  },
}
