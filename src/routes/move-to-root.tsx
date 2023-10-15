import { Navigate } from 'react-router'
import { pages } from './app-routes.constants'

export const MoveToRoot = () => (
  <Navigate
    replace
    to={pages.default.path}
  />
)
