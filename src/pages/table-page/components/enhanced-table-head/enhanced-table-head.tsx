import { MouseEvent } from 'react'
import { EnhancedTableProps } from './enhanced-table-head.types'
import { KeysDocument } from '../../../../store/slice/documents.types'
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { headCells } from './enhanced-table-head.constants'

export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, onRequestSort } = props

  const createSortHandler =
    (property: KeysDocument) => (event: MouseEvent<unknown>) => {
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
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
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
