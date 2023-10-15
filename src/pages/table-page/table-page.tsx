import {
  MouseEvent,
  useMemo,
  useState
} from 'react'
import {
  useDocuments,
  useTotal
} from '../../store/hook'
import {
  EnhancedTableHead,
  arrTableCell,
  getComparator,
  stableSort
} from './table-page.utils'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useUrlFetch } from '../../hooks'
import { KeysDocument } from '../../store/slice'
import { Order } from './table-page.types'
import { ChangeMode } from '../../components'

export const TablePage = () => {
  const total = useTotal()
  const documents = useDocuments()

  console.log({ Tt: total, Dt: documents })

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

  const visibleRows = useMemo(
    () =>
      stableSort(
        documents,
        getComparator(order, orderBy)
      ),
    [order, orderBy, documents.length]
  )

  return (
    <Box sx={{ width: '100%' }}>
      <ChangeMode />
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
    </Box>
  )
}
