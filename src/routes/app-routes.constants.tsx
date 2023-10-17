import { PageType, RouteType } from './app-routes.types'
import { Detail, JsonDisplay, TablePage } from '../pages'
import { Navigate } from 'react-router'

const MoveToRoot = () => (
  <Navigate
    replace
    to={pages.default.path}
  />
)

export const pages: PageType = {
  table: {
    path: '/data/table/'
  },
  jsonDisplay: {
    path: '/data/display'
  },
  detail: {
    path: '/detail/'
  },
  default: {
    path: '/data/table?mode=all&page=1'
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
    element: <TablePage />
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
  }
]
