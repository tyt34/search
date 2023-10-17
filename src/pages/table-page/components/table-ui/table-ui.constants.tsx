import { ExtendedTableCellProps } from '../enhanced-table-head/enhanced-table-head.types'

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
