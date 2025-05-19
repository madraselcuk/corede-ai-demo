import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const LOCALE_DIR = path.join(__dirname, '../src/localization/locale')
const OUTPUT_FILE = path.join(__dirname, '../src/localization/types-generated.ts')

function generateTypesFromJson(
  json: any,
  namespace: string,
  depth: number = 0,
): string {
  let typeDefinition = ''
  const indent = '  '.repeat(depth)

  // First, generate all nested types
  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'object' && value !== null) {
      const nestedTypeName = `${namespace}${key.charAt(0).toUpperCase() + key.slice(1)}`
      typeDefinition += generateTypesFromJson(value, nestedTypeName, depth)
    }
  }

  // Then generate the current type
  typeDefinition += `${indent}export type ${namespace} = {\n`

  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'object' && value !== null) {
      const nestedTypeName = `${namespace}${key.charAt(0).toUpperCase() + key.slice(1)}`
      typeDefinition += `${indent}  ${key}: ${nestedTypeName}\n`
    } else {
      typeDefinition += `${indent}  ${key}: string\n`
    }
  }

  typeDefinition += `${indent}}\n\n`
  return typeDefinition
}

function findTranslations(): Record<string, any> {
  const translations: Record<string, any> = {}

  if (fs.existsSync(LOCALE_DIR)) {
    const files = fs.readdirSync(LOCALE_DIR)
    const jsonFiles = files.filter((file) => file.endsWith('.json'))

    if (jsonFiles.length > 0) {
      // Use the first JSON file as a sample to generate types
      const sampleFile = path.join(LOCALE_DIR, jsonFiles[0])
      const json = JSON.parse(fs.readFileSync(sampleFile, 'utf-8'))
      return json
    }
  }

  return translations
}

function main() {
  let typeDefinitions = '// This file is auto-generated. Do not edit manually.\n\n'

  const translations = findTranslations()

  if (Object.keys(translations).length > 0) {
    // Generate types for each top-level namespace in the translations
    for (const [namespace, value] of Object.entries(translations)) {
      if (typeof value === 'object' && value !== null) {
        const typeName = namespace.charAt(0).toUpperCase() + namespace.slice(1)
        typeDefinitions += generateTypesFromJson(value, typeName)
      }
    }
  }

  // Write the generated types to the output file
  fs.writeFileSync(OUTPUT_FILE, typeDefinitions)
  console.log('Translation types generated successfully!')
}

main()
