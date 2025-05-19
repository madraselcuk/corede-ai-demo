import type { ReactNode, CSSProperties } from 'react'

export interface CommonProps {
  id?: string
  className?: string
  children?: ReactNode
  style?: CSSProperties
}

export type TableQueries = {
  total?: number
  pageIndex?: string
  pageSize?: string
  query?: string
  order?: 'asc' | 'desc' | ''
  sortKey?: string | number
}

export type PageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

/**
 * UiType is a type that represents the type of UI element.
 * It can be a container, dialog, or drawer.
 * Especially used in out ui components that uses base functionality container components
 */
export type UiType = 'container' | 'dialog' | 'drawer'

export type HasUiType = {
  uiType?: UiType
}

export type ActionType =
  | 'general'
  | 'create'
  | 'update'
  | 'delete'
  | 'detail'
  | 'list'
