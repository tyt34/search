import { MouseEvent, useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { Cell } from '..'
import { EnhancedTableHead } from '../enhanced-table-head'
import { KeysDocument } from '../../../../store/slice/documents.types'
import { Order } from './table-ui.types'
import { arrTableCell } from './table-ui.constants'
import { getComparator, stableSort } from './table-ui.utils'
import { useDocuments } from '../../../../store/hook'
import { useUrlFetch } from '../../../../hooks'

export const TableUi = () => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<KeysDocument>('id')

  const documents = useDocuments()

  const visibleRows = stableSort(documents, getComparator(order, orderBy))

  useUrlFetch()

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: KeysDocument
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
      <h1>Table documents:</h1>
      <TableContainer>
        <Table
          sx={{ minWidth: 700 }}
          aria-labelledby="tableTitle"
          size={'small'}
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={documents.length}
          />
          <TableBody>
            {visibleRows.map((row) => {
              return (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={row.id}
                  sx={{ cursor: 'pointer' }}
                >
                  {arrTableCell.map((rowEl) => {
                    return (
                      <Cell
                        key={rowEl.rowtype}
                        row={row}
                        rowElement={rowEl}
                      />
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
