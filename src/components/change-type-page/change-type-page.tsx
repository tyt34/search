import {
  useLocation,
  useNavigate
} from 'react-router'
import { arrFilter } from '../../utils'
import { Button } from '@mui/material'
import { startTransition } from 'react'
import { pages } from '../../routes/app-routes.constants'

export const ChangeTypePage = () => {
  const navigate = useNavigate()

  const { pathname, search } = useLocation()

  const handleClick = () => {
    const arrPath = arrFilter(pathname.split('/'))
    const mode = arrPath[1]
    const nextPageLeft: string =
      mode === 'table'
        ? pages.jsonDisplay.path
        : pages.table.path

    const nextPage = nextPageLeft + search

    startTransition(() => {
      navigate(nextPage)
    })
  }

  return (
    <Button
      variant="contained"
      onClick={handleClick}
    >
      Change type page
    </Button>
  )
}
