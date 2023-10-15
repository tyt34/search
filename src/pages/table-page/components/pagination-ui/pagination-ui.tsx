import { Pagination } from '@mui/material'
import {
  ChangeEvent,
  startTransition,
  useEffect
} from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useTotal } from '../../../../store/hook'
import { documentsOnPage } from '../../../../constants'
import { usePageNumber } from '../../../../hooks'

export const PaginationUi = () => {
  const { page } = usePageNumber()
  // const [page, setPage] = useState(1)
  const total = useTotal()

  const maxPage = total / documentsOnPage

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const handleChange = (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
    // setPage(value)
    searchParams.set('page', `${value}`)

    startTransition(() => {
      navigate({
        search: '?' + searchParams.toString()
      })
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
      }}
    >
      <Pagination
        count={maxPage}
        page={Number(page)}
        onChange={handleChange}
      />
    </div>
  )
}
