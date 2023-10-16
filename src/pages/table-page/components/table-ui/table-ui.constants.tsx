import { ExtendedTableCellProps, HeadCell } from './table-ui.types'

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

export const arrTableCell: ExtendedTableCellProps[] = [
  {
    component: 'th',
    scope: 'row',
    padding: 'none',
    align: 'center',
    rowtype: 'id'
  },
  {
    component: 'th',
    scope: 'row',
    padding: 'none',
    align: 'center',
    rowtype: 'postId'
  },
  {
    align: 'left',
    rowtype: 'name'
  },
  {
    align: 'left',
    rowtype: 'email'
  },
  {
    align: 'left',
    rowtype: 'body'
  }
]
