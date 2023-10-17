import { HeadCell } from './enhanced-table-head.types'

export const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'Id'
  },
  {
    id: 'postId',
    numeric: true,
    disablePadding: false,
    label: 'Post'
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name'
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email'
  },
  {
    id: 'body',
    numeric: false,
    disablePadding: false,
    label: 'Text'
  }
]
