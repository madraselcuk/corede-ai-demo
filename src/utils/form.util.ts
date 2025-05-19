import { FieldError } from 'react-hook-form'

// Get the error message from the nested structure
export function getFieldError(
  errors: any,
  hookName?: string,
): FieldError | undefined {
  if (!hookName) {
    return undefined
  }
  // Split the hookName to handle nested fields (e.g., "input.question" -> ["input", "question"])
  const fieldPath = hookName.split('.')

  let current: any = errors
  for (const key of fieldPath) {
    if (!current?.[key]) return undefined
    current = current[key]
  }
  return current as FieldError | undefined
}

// Get the error message from the nested structure
export function getFieldDirty(
  dirtyFields: any,
  hookName?: string,
): boolean | undefined {
  if (!hookName) {
    return undefined
  }
  // Split the hookName to handle nested fields (e.g., "input.question" -> ["input", "question"])
  const fieldPath = hookName.split('.')

  let current: any = dirtyFields
  for (const key of fieldPath) {
    if (!current?.[key]) return false
    current = current[key]
  }
  return current
}
