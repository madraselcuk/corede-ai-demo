export function pathWithParams(
  basePath: string,
  params?: Record<string, string>,
): string {
  return `${basePath}${params ? `?${new URLSearchParams(params).toString()}` : ''}`
}
