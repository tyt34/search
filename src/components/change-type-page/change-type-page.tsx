import {
  useLocation,
  useNavigate
} from 'react-router'
import { arrFilter } from '../../utils'
import { Button } from '@mui/material'
import { startTransition } from 'react'
import { pages } from '../../routes/app-routes.constants'
// import styles from './change-mode.module.scss'

export const ChangeTypePage = () => {
  const navigate = useNavigate()

  const { pathname, state, search, hash } =
    useLocation()

  // console.log({
  //   path: pathname,
  //   state,
  //   search,
  //   hash
  // })

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
      }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
      >
        Change type page
      </Button>
    </div>
  )
}
