import { Box } from '@mui/material'
import { ChangeTypePage } from '../../components'
import {
  FilterSearch,
  PaginationUi,
  TableUi
} from './components'

export const TablePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <ChangeTypePage />
      <FilterSearch />
      <PaginationUi />
      <TableUi />
      <PaginationUi />
    </Box>
  )
}
