import { FC, startTransition } from 'react'
import { useNavigate } from 'react-router'
import { ExtendedTableCellProps } from '../enhanced-table-head/enhanced-table-head.types'
import { TableCell, Tooltip } from '@mui/material'
import { TypeDocument } from '../../../../store/slice/documents.types'
import { pages } from '../../../../routes/app-routes.constants'

type Props = {
  row: TypeDocument
  rowElement: ExtendedTableCellProps
}

export const Cell: FC<Props> = ({ row, rowElement }) => {
  const navigate = useNavigate()
  const value = row[rowElement.rowtype]

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
    <>
      {rowElement.rowtype === 'id' ? (
        <Tooltip title={`Open detail document ${value}`}>
          <TableCell
            {...rowElement}
            onClick={() => movePage(`${value}`)}
          >
            {value}
          </TableCell>
        </Tooltip>
      ) : (
        <TableCell {...rowElement}>{value}</TableCell>
      )}
    </>
  )
}
