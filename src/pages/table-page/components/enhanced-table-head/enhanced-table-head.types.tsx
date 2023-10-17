import { MouseEvent } from 'react'
import { TableCellProps } from '@mui/material/TableCell'
import { KeysDocument } from '../../../../store/slice/documents.types'
import { Order } from '../table-ui/table-ui.types'

export interface ExtendedTableCellProps extends TableCellProps {
  rowtype: KeysDocument
}

export interface HeadCell {
  disablePadding: boolean
  id: KeysDocument
  label: string
  numeric: boolean
}

export interface EnhancedTableProps {
  onRequestSort: (event: MouseEvent<unknown>, property: KeysDocument) => void
  order: Order
  orderBy: string
  rowCount: number
}
