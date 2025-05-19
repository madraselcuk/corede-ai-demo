export class NameFactory {
  /**
   * returns fullName by merging `name` and `surname`
   */
  static getFullName(params: {
    name?: string
    surname?: string
    defaultName?: string
  }): string {
    const defaultName = params.defaultName ?? ''
    if (!params) {
      return defaultName
    }
    if (!params?.name && !params?.surname) {
      return defaultName
    }

    if (params.name) {
      return `${params.name} ${params.surname ?? ''}`
    }

    return params.surname ?? ''
  }

  static getFallbackLetters(params: {
    name?: string
    surname?: string
  }): string {
    if (!params.name && !params.surname) {
      return ''
    }

    return `${params.name?.substring(0, 1)}${params.surname?.substring(0, 1)}`
  }
}
