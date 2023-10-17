import { FC, startTransition } from 'react'
import { Chip } from '@mui/material'
import { KeysDocument } from '../../../../store/slice/documents.types'
import { pages } from '../../../../routes/app-routes.constants'
import { useNavigate } from 'react-router'
import styles from './row.module.scss'

type Props = {
  value: string
  field: KeysDocument
}

export const Row: FC<Props> = ({ value, field }) => {
  const navigate = useNavigate()

  const moveToTable = (field: KeysDocument, value: string) => {
    const searchParams = new URLSearchParams()
    const isStrField = ['name', 'email', 'body'].some((el) => el === field)

    if (field === 'id') {
      searchParams.set('mode', 'filter')
      searchParams.set('page', '1')
      searchParams.set('from_id', value)
      searchParams.set('to_id', value)

      startTransition(() => {
        navigate({
          pathname: pages.table.path,
          search: '?' + searchParams.toString()
        })
      })
    }

    if (field === 'postId') {
      searchParams.set('mode', 'filter')
      searchParams.set('page', '1')
      searchParams.set('from_post', value)
      searchParams.set('to_post', value)

      startTransition(() => {
        navigate({
          pathname: pages.table.path,
          search: '?' + searchParams.toString()
        })
      })
    }

    if (isStrField) {
      const clearText = value.split('\n').join(' ')

      searchParams.set('mode', 'search')
      searchParams.set('page', '1')
      searchParams.set('type_search', 'accurate')
      searchParams.set('text_search', clearText)
      searchParams.set('place_search', field)

      startTransition(() => {
        navigate({
          pathname: pages.table.path,
          search: '?' + searchParams.toString()
        })
      })
    }
  }

  const fieldUpper = field.toUpperCase()
  return (
    <div
      className={styles.line}
      key={field}
    >
      <div className={styles.row}>
        <Chip
          color="primary"
          label={`${fieldUpper}:`}
        />
      </div>
      <span
        className={styles.link}
        onClick={() => {
          moveToTable(field, value)
        }}
      >
        {value}
      </span>
    </div>
  )
}
