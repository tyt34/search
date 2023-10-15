import { MouseEvent } from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import TableCell from '@mui/material/TableCell'
import { KeysDocument } from '../../store/slice'
import {
  EnhancedTableProps,
  ExtendedTableCellProps,
  HeadCell,
  Order
} from './table-page.types'

export const arrTableCell: ExtendedTableCellProps[] =
  [
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

function descendingComparator<T>(
  a: T,
  b: T,
  orderBy: keyof T
) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export function getComparator<
  Key extends keyof any
>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) =>
        descendingComparator(a, b, orderBy)
    : (a, b) =>
        -descendingComparator(a, b, orderBy)
}

export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map(
    (el, index) => [el, index] as [T, number]
  )
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells: readonly HeadCell[] = [
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

export function EnhancedTableHead(
  props: EnhancedTableProps
) {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler =
    (property: KeysDocument) =>
    (event: MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => {
          return (
            <TableCell
              key={headCell.id}
              align={'left'}
              padding={'normal'}
              sortDirection={
                orderBy === headCell.id
                  ? order
                  : false
              }
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={
                  orderBy === headCell.id
                    ? order
                    : 'asc'
                }
                onClick={createSortHandler(
                  headCell.id
                )}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}
