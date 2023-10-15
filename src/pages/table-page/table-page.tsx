import { Box } from '@mui/material'
import { ChangeTypePage } from '../../components'
import {
  PaginationUi,
  TableUi
} from './components'

export const TablePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <ChangeTypePage />
      <PaginationUi />
      <TableUi />
      <PaginationUi />
    </Box>
  )
}
