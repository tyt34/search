import { SearchType } from '../pages/table-page/components'
import { TypeDocument } from '../store/slice'

const url = 'http://localhost:3001'

export type typeForFetch =
  | 'all'
  | 'filter'
  | 'search'
  | 'filter_search'

export type ConfFetch = {
  type: typeForFetch
  page: number | string
  fromId: string
  toId: string
  fromPost: string
  toPost: string
  textSearch: string
  typeSearch: SearchType
  placeSearch: string[]
}

const transformParams = (params: ConfFetch) => {
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
  let endpoint = ''

  console.log({ type })

  const placeSearchUrl = [1, 2, 3].reduce<string>(
    (acc, el, i) => {
      const isPlace = placeSearch[i]
      const addPath = isPlace
        ? `&field=${isPlace}`
        : '&field='

      const newPath = acc + addPath
      return newPath
    },
    ''
  )

  const searchTypeUrl =
    typeSearch === 'accurate'
      ? 'match_phrase'
      : 'multi_match'

  const partPage = `?page=${page}`
  const partFilter = `&from_id=${fromId}&to_id=${toId}&from_post=${fromPost}&to_post=${toPost}`
  const partSearch = `&text=${textSearch}&search_type=${searchTypeUrl}${placeSearchUrl}`

  if (type === 'all') {
    endpoint = `/${type}${partPage}`
  }

  if (type === 'filter') {
    endpoint = `/${type}${partPage}${partFilter}`
  }

  if (type === 'search') {
    endpoint = `/${type}${partPage}${partSearch}`
  }

  if (type === 'filter_search') {
    endpoint = `/${type}${partPage}${partSearch}${partFilter}`
  }

  console.log({
    endpoint,
    arr: endpoint.split('&')
  })

  return endpoint
}

type DataFetch = {
  data: TypeDocument[]
  total: number
}

export const getData = async (
  params: ConfFetch
): Promise<DataFetch> => {
  const urlFetch = url + transformParams(params)

  const res = await fetch(urlFetch, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const json = await res.json()

  return json
}
