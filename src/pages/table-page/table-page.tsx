import { Box } from '@mui/material'
import { ButtonRestart, ChangeTypePage } from '../../components'
import { FilterSearch, PaginationUi, TableUi } from './components'

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
