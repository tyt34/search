import {
  useLocation,
  useNavigate
} from 'react-router'
import { arrFilter } from '../../utils'
import { pages } from '../../constants'
import { Button } from '@mui/material'
// import styles from './change-mode.module.scss'

export const ChangeMode = () => {
  const navigate = useNavigate()
  console.log({ navigate })

  const { pathname } = useLocation()

  const handleClick = () => {
    const arrPath = arrFilter(pathname.split('/'))
    const mode = arrPath[1]
    const nextPage: string =
      mode === 'table'
        ? pages.jsonDisplay.path
        : pages.table.path
    console.log({ mode, nextPage })
    navigate(nextPage)
  }

  console.log({ pathname })

  return (
    <Button
      variant="contained"
      onClick={handleClick}
    >
      Change mode
    </Button>
  )
}
