import { PageType, RouteType } from './app-routes.types'
import { Detail, JsonDisplay, Table } from '../pages'
import { MoveToRoot } from './move-to-root'

export const pages: PageType = {
  table: {
    path: '/data/table'
  },
  jsonDisplay: {
    path: '/data/display'
  },
  detail: {
    path: '/detail'
  }
}

export const configRoutes: RouteType[] = [
  {
    key: 'first',
    path: '/',
    element: <MoveToRoot />
  },
  {
    key: '1',
    path: pages.table.path,
    element: <Table />
  },
  {
    key: '2',
    path: pages.jsonDisplay.path,
    element: <JsonDisplay />
  },
  {
    key: '3',
    path: pages.detail.path,
    element: <Detail />
  },
  {
    key: 'last',
    path: '/*',
    element: <MoveToRoot />
  }
]
