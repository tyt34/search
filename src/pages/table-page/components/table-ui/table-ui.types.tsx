import { MouseEvent } from 'react'
import { TableCellProps } from '@mui/material/TableCell'
import { KeysDocument } from '../../../../store/slice'

export interface ExtendedTableCellProps
  extends TableCellProps {
  rowtype: KeysDocument
}

export type Order = 'asc' | 'desc'

export interface HeadCell {
  disablePadding: boolean
  id: KeysDocument
  label: string
  numeric: boolean
}

export interface EnhancedTableProps {
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: KeysDocument
  ) => void

  order: Order
  orderBy: string
  rowCount: number
}
