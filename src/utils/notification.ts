export type OnQueryError = (params?: { message?: string; error?: any }) => void

export type OnQuerySuccess = (message?: string) => void
