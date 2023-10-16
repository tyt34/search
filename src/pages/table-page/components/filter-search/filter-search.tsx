import {
  ChangeEvent,
  startTransition,
  useEffect,
  useState,
  MouseEvent
} from 'react'
import {
  Button,
  FormControl,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip
} from '@mui/material'
import styles from './filter-search.module.scss'
import { useNavigate } from 'react-router'
import { useGetParamsUrl } from '../../../../hooks'
import { tooltipTextSearch } from './filter-search.constants'
import { splitFieldSearch } from '../../../../constants'

export type SearchType = 'accurate' | 'advanced'

type FormDataType = {
  idFrom: string
  idTo: string
  postIdFrom: string
  postIdTo: string
  searchText: string
  typeSearch: SearchType
  placeSearch: string[]
}

export const FilterSearch = () => {
  const navigate = useNavigate()
  const {
    fromId,
    fromPost,
    toId,
    toPost,
    textSearch,
    typeSearch,
    placeSearch
  } = useGetParamsUrl()

  const [formData, setFormData] =
    useState<FormDataType>({
      idFrom: '',
      idTo: '',
      postIdFrom: '',
      postIdTo: '',
      searchText: '',
      typeSearch: 'accurate',
      placeSearch: ['body', 'name', 'email']
    })

  useEffect(() => {
    setFormData({
      idFrom: fromId,
      idTo: toId,
      postIdFrom: fromPost,
      postIdTo: toPost,
      searchText: textSearch,
      typeSearch: !!typeSearch
        ? (typeSearch as SearchType)
        : 'accurate',
      placeSearch:
        placeSearch !== ''
          ? placeSearch.split(splitFieldSearch)
          : ['body', 'name', 'email']
    })
  }, [])

  const handleClickFilter = () => {
    const searchParams = new URLSearchParams()

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

  const handleClickSearch = () => {
    const searchParams = new URLSearchParams()

    console.log(' Search ')

    const {
      typeSearch,
      searchText,
      placeSearch
    } = formData

    searchParams.set('mode', 'search')
    searchParams.set('page', '1')
    searchParams.set('type_search', typeSearch)
    searchParams.set('text_search', searchText)
    searchParams.set(
      'place_search',
      placeSearch.join(splitFieldSearch)
    )

    startTransition(() => {
      navigate({
        search: '?' + searchParams.toString()
      })
    })
  }

  const handleClickFilterSearch = () => {
    const searchParams = new URLSearchParams()

    console.log(' Filter and search ')

    const {
      idFrom,
      idTo,
      postIdFrom,
      postIdTo,
      searchText,
      placeSearch
    } = formData

    searchParams.set('mode', 'filter_search')
    searchParams.set('page', '1')
    searchParams.set('from_id', idFrom)
    searchParams.set('to_id', idTo)
    searchParams.set('from_post', postIdFrom)
    searchParams.set('to_post', postIdTo)

    searchParams.set('type_search', typeSearch)
    searchParams.set('text_search', searchText)
    searchParams.set(
      'place_search',
      placeSearch.join(splitFieldSearch)
    )

    startTransition(() => {
      navigate({
        search: '?' + searchParams.toString()
      })
    })
  }

  const handleInputChangeNumber = (
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

  const handleInputChangeText = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    event.target.value = value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const changeTypeSeach = (
    event: MouseEvent<HTMLElement>,
    newValue: SearchType
  ) => {
    if (!!newValue) {
      setFormData({
        ...formData,
        typeSearch: newValue
      })
    }
  }

  const changePlaceSearch = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string[]
  ) => {
    setFormData({
      ...formData,
      placeSearch: newValue
    })
  }

  return (
    <div className={styles.filter}>
      <FormControl>
        <div className={styles.row}>
          <TextField
            label="Filter ID from"
            name="idFrom"
            onInput={handleInputChangeNumber}
            value={formData.idFrom}
          />
          <TextField
            label="Filter ID to"
            name="idTo"
            onInput={handleInputChangeNumber}
            value={formData.idTo}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="Filter PostID from"
            name="postIdFrom"
            onInput={handleInputChangeNumber}
            value={formData.postIdFrom}
          />
          <TextField
            label="Filter PostID to"
            name="postIdTo"
            onInput={handleInputChangeNumber}
            value={formData.postIdTo}
          />
        </div>
        <div className={styles.row}>
          <TextField
            label="Search text"
            name="searchText"
            onInput={handleInputChangeText}
            value={formData.searchText}
          />
          <div className={styles.toggles}>
            <Tooltip title={tooltipTextSearch}>
              <ToggleButtonGroup
                size="small"
                color="primary"
                value={formData.typeSearch}
                exclusive
                onChange={changeTypeSeach}
                aria-label="Platform"
              >
                <ToggleButton value="accurate">
                  Accurate
                </ToggleButton>
                <ToggleButton value="advanced">
                  Advanced
                </ToggleButton>
              </ToggleButtonGroup>
            </Tooltip>
            <ToggleButtonGroup
              value={formData.placeSearch}
              onChange={changePlaceSearch}
              aria-label="text formatting"
              color="primary"
            >
              <ToggleButton
                value="name"
                aria-label="name"
              >
                Name
              </ToggleButton>
              <ToggleButton
                value="email"
                aria-label="email"
              >
                Email
              </ToggleButton>
              <ToggleButton
                value="body"
                aria-label="body"
              >
                Body
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button
            variant="contained"
            onClick={handleClickFilter}
          >
            filter
          </Button>
          <Button
            variant="contained"
            onClick={handleClickSearch}
          >
            search
          </Button>
          <Button
            variant="contained"
            onClick={handleClickFilterSearch}
          >
            filter and search
          </Button>
        </div>
      </FormControl>
    </div>
  )
}
