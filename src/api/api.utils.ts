import { amountField } from '../constants'
import { SearchType } from '../pages/table-page/components/filter-search/filter-search.types'
import { ConfFetch } from './api.types'

const typeBackSearch: Record<SearchType, string> = {
  accurate: 'match_phrase',
  advanced: 'multi_match'
}

const getPlaceSearchUrl = (fields: string[]) => {
  const arrHelp = new Array(amountField).fill('')
  const fieldsUrl = arrHelp.reduce<string>((acc, _el, i) => {
    const isPlace = fields[i]
    const addPath = isPlace ? `&field=${isPlace}` : '&field='
    const newPath = acc + addPath
    return newPath
  }, '')

  return fieldsUrl
}

export const transformParams = (params: ConfFetch) => {
  const {
    fromId,
    fromPost,
    page,
    toId,
    toPost,
    type,
    textSearch,
    typeSearch,
    placeSearch
  } = params

  const placeSearchUrl = placeSearch
    ? getPlaceSearchUrl(placeSearch)
    : '&field=&field=&field='

  const searchTypeUrl = !!typeSearch
    ? typeBackSearch[typeSearch]
    : 'multi_match'

  const partPage = `?page=${page}`
  const partFilter = `&from_id=${fromId}&to_id=${toId}&from_post=${fromPost}&to_post=${toPost}`
  const partSearch = `&text=${textSearch}&search_type=${searchTypeUrl}${placeSearchUrl}`

  const createEndpoint = {
    all: `/${type}${partPage}`,
    filter: `/${type}${partPage}${partFilter}`,
    search: `/${type}${partPage}${partSearch}`,
    filter_search: `/${type}${partPage}${partSearch}${partFilter}`
  }

  const endpoint = createEndpoint[type]

  return endpoint
}
