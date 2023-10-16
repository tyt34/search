import { Box } from '@mui/material'
import { ChangeTypePage } from '../../components'
import {
  ButtonRestart,
  FilterSearch,
  PaginationUi,
  TableUi
} from './components'

export const TablePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
          gap: '10px'
        }}
      >
        <ChangeTypePage />
        <ButtonRestart />
      </div>
      <FilterSearch />
      <PaginationUi />
      <TableUi />
      <PaginationUi />
    </Box>
  )
}
