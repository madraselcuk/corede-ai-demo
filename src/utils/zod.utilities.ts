import { isNullOrUndefinedOrEmpty } from '@common_package'

/**
 * @mutating
 * @description Remove empty data from the object
 */
export function removeEmptyData(value: any): undefined {
  if (isNullOrUndefinedOrEmpty(value)) {
    return undefined
  }

  return value
}

export function removeEmptyAndExistingData(
  value: any,
  existing: any,
): undefined {
  if (valueIsChanged(value, existing)) {
    return value
  }

  return undefined
}

export function valueIsChanged(input?: any, existing?: any): boolean {
  if (isNullOrUndefinedOrEmpty(input) && isNullOrUndefinedOrEmpty(existing)) {
    return false
  }

  // Handle array comparisons
  if (Array.isArray(input) && Array.isArray(existing)) {
    if (input.length !== existing.length) {
      return true
    }
    // Compare each element in the arrays
    return input.some((item, index) => item !== existing[index])
  }

  // Handle object comparisons
  if (
    typeof input === 'object' &&
    typeof existing === 'object' &&
    input !== null &&
    existing !== null
  ) {
    const inputKeys = Object.keys(input)
    const existingKeys = Object.keys(existing)

    if (inputKeys.length !== existingKeys.length) {
      return true
    }

    return inputKeys.some((key) => valueIsChanged(input[key], existing[key]))
  }

  // Default comparison for primitive values
  return input !== existing
}

export function objectIsChanged(input?: any, existing?: any): boolean {
  if (!existing) return false

  for (const key in input) {
    if (Object.hasOwn(input, key) && Object.hasOwn(existing, key)) {
      if (valueIsChanged(input[key], existing[key])) {
        return true
      }
    }
  }

  return false
}

export function removeEmptyAndExistingField(
  input?: any,
  existing?: any,
): boolean {
  if (!input || !existing) {
    return input
  }
  for (const key in input) {
    if (Object.hasOwn(input, key) && Object.hasOwn(existing, key)) {
      input[key] = removeEmptyAndExistingData(input[key], existing[key])
    }
  }

  return input
}

export function convertNumberInStringToNumber(
  val: unknown,
): number | undefined {
  return val === '' || val === null || val === undefined
    ? undefined
    : Number(val)
}
