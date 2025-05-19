import packageJson from '../package.json'

// ----------------------------------------------------------------------

export type TEnvironment = 'development' | 'test' | 'staging' | 'production'

export type ConfigValue = {
  environment: TEnvironment
  appName: string
  appVersion: string
  serverUrl: string
}

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  environment: (process.env.NODE_ENV as TEnvironment) ?? 'development',
  appName: 'Base Frontend',
  appVersion: packageJson.version,
  // serverUrl: process.env.API_BASE_URL ?? 'http://75.119.134.26:4001/graphql',
  serverUrl: process.env.API_BASE_URL ?? 'http://localhost:3001',
}
