import { RouteType } from './app-routes.types'
import {
  Detail,
  JsonDisplay,
  TablePage
} from '../pages'
import { MoveToRoot } from './move-to-root'
import { NowUrl } from '../components'
import { pages } from '../constants'

export const configRoutes: RouteType[] = [
  {
    key: 'first',
    path: '/',
    element: <MoveToRoot />
  },
  {
    key: '1',
    path: pages.table.path,
    element: (
      <>
        <NowUrl />
        <TablePage />
      </>
    )
  },
  {
    key: '2',
    path: pages.jsonDisplay.path,
    element: (
      <>
        <NowUrl />
        <JsonDisplay />
      </>
    )
  },
  {
    key: '3',
    path: pages.detail.path,
    element: (
      <>
        <NowUrl />
        <Detail />
      </>
    )
  }
  // {
  //   key: 'last',
  //   path: '/*',
  //   element: <MoveToRoot />
  // }
]
