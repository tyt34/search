import { Pagination } from '@mui/material'
import {
  ChangeEvent,
  startTransition
} from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useTotal } from '../../../../store/hook'
import { documentsOnPage } from '../../../../constants'
import { usePageNumber } from '../../../../hooks'

export const PaginationUi = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const total = useTotal()
  const { page } = usePageNumber()

  const maxPage = Math.ceil(
    total / documentsOnPage
  )

  const handleChange = (
    event: ChangeEvent<unknown>,
    value: number
  ) => {
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
