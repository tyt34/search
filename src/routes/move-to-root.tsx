import { Navigate } from 'react-router'
import { pages } from '../constants'

export const MoveToRoot = () => (
  <Navigate
    replace
    to={pages.table.path}
  />
)
