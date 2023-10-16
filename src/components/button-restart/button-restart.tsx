import { startTransition } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'
import { pages } from '../../routes/app-routes.constants'

export const ButtonRestart = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    startTransition(() => {
      navigate(pages.default.path)
    })
  }

  return (
    <Button
      variant="contained"
      onClick={handleClick}
    >
      Restart
    </Button>
  )
}
