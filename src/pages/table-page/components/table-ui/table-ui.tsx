import {
  Fragment,
  MouseEvent,
  startTransition,
  useState
} from 'react'
import { useNavigate } from 'react-router'
import {
  EnhancedTableHead,
  arrTableCell,
  getComparator,
  stableSort
} from './table-ui.utils'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { KeysDocument } from '../../../../store/slice'
import { Order } from './table-ui.types'
import { useDocuments } from '../../../../store/hook'
import { useUrlFetch } from '../../../../hooks'
import { Tooltip } from '@mui/material'
import { pages } from '../../../../routes/app-routes.constants'

export const TableUi = () => {
  const navigate = useNavigate()
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

  const movePage = (id: string) => {
    const searchParams = new URLSearchParams()

    searchParams.set('id', id)

    startTransition(() => {
      navigate({
        pathname: pages.detail.path,
        search: '?' + searchParams.toString()
      })
    })
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
                    const value =
                      row[rowEl.rowtype]
                    return (
                      <Fragment
                        key={rowEl.rowtype}
                      >
                        {rowEl.rowtype ===
                        'id' ? (
                          <Tooltip
                            title={`Open detail document ${value}`}
                          >
                            <TableCell
                              {...rowEl}
                              onClick={() =>
                                movePage(
                                  row[
                                    rowEl.rowtype
                                  ] as string
                                )
                              }
                            >
                              {value}
                            </TableCell>
                          </Tooltip>
                        ) : (
                          <TableCell {...rowEl}>
                            {value}
                          </TableCell>
                        )}
                      </Fragment>
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
