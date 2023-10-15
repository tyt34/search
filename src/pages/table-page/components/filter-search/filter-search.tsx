import {
  ChangeEvent,
  startTransition,
  useEffect,
  useState
} from 'react'
import {
  Button,
  FormControl,
  TextField
} from '@mui/material'
import styles from './filter-search.module.scss'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useGetParamsUrl } from '../../../../hooks'

export const FilterSearch = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { fromId, fromPost, toId, toPost } =
    useGetParamsUrl()

  const [formData, setFormData] = useState({
    idFrom: '',
    idTo: '',
    postIdFrom: '',
    postIdTo: ''
  })

  useEffect(() => {
    setFormData({
      idFrom: fromId,
      idTo: toId,
      postIdFrom: fromPost,
      postIdTo: toPost
    })
  }, [])

  console.log({ formData })

  const handleClick = () => {
    console.log(' Filter ')

    const { idFrom, idTo, postIdFrom, postIdTo } =
      formData

    searchParams.set('mode', 'filter')
    searchParams.set('page', '1')

    searchParams.set('from_id', idFrom)
    searchParams.set('to_id', idTo)

    searchParams.set('from_post', postIdFrom)
    searchParams.set('to_post', postIdTo)

    startTransition(() => {
      navigate({
        search: '?' + searchParams.toString()
      })
    })
  }

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    const newValue = value.replace(/[^0-9]/g, '')

    event.target.value = newValue

    setFormData({
      ...formData,
      [name]: newValue
    })
  }

  return (
    <div className={styles.filter}>
      <FormControl>
        <div className={styles.row}>
          <TextField
            label="ID from"
            name="idFrom"
            onInput={handleInputChange}
            value={formData.idFrom}
          />
          <TextField
            label="ID to"
            name="idTo"
            onInput={handleInputChange}
            value={formData.idTo}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="PostID from"
            name="postIdFrom"
            onInput={handleInputChange}
            value={formData.postIdFrom}
          />
          <TextField
            label="PostID to"
            name="postIdTo"
            onInput={handleInputChange}
            value={formData.postIdTo}
          />
        </div>
        <Button
          variant="contained"
          onClick={handleClick}
        >
          filter
        </Button>
      </FormControl>
    </div>
  )
}
