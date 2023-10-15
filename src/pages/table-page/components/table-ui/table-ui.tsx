import {
  MouseEvent,
  useMemo,
  useState
} from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
  useDocuments,
  useTotal
} from '../../../../store/hook'
import {
  usePageNumber,
  useUrlFetch
} from '../../../../hooks'
import { KeysDocument } from '../../../../store/slice'
import {
  EnhancedTableHead,
  arrTableCell,
  getComparator,
  stableSort
} from './table-ui.utils'
import { Order } from './table-ui.types'

export const TableUi = () => {
  const total = useTotal()
  const documents = useDocuments()

  console.log({
    // Tt: total,
    // Dt: documents,
    fd: documents.length ? documents[0].id : null
  })

  useUrlFetch()

  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] =
    useState<KeysDocument>('id')

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: KeysDocument
  ) => {
    const isAsc =
      orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const visibleRows = stableSort(
    documents,
    getComparator(order, orderBy)
  )

  // const visibleRows = useMemo(
  //   () =>
  //     stableSort(
  //       documents,
  //       getComparator(order, orderBy)
  //     ),
  //   [order, orderBy, documents.length, page]
  // )

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
                      <TableCell
                        key={rowEl.rowtype}
                        {...rowEl}
                      >
                        {row[rowEl.rowtype]}
                      </TableCell>
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
