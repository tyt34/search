export type RouteType = {
  key: string | number
  path: string | undefined
  element: JSX.Element
}

export type PageType = Record<string, { path: string }>
