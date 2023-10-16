type AllPage = 'table' | 'jsonDisplay' | 'detail' | 'default'

export type RouteType = {
  key: string | number
  path: string | undefined
  element: JSX.Element
}

export type PageType = Record<AllPage, { path: string }>
