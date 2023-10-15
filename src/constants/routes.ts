import { PageType } from '../routes/app-routes.types'

export const pages: PageType = {
  table: {
    path: '/data/table/'
  },
  jsonDisplay: {
    path: '/data/display'
  },
  detail: {
    path: '/detail'
  },
  default: {
    path: '/data/table?page=1'
  }
}
