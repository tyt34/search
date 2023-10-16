import { SearchType } from '../pages/table-page/components'
import { TypeDocument } from '../store/slice'

const url = 'http://localhost:3001'

export type typeForFetch =
  | 'all'
  | 'filter'
  | 'search'

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

  if (type === 'all') {
    endpoint = `/${type}?page=${page}`
  }
  if (type === 'filter') {
    endpoint = `/${type}?page=${page}&from_id=${fromId}&to_id=${toId}&from_post=${fromPost}&to_post=${toPost}`
  }
  if (type === 'search') {
    const placeSearchUrl = [
      1, 2, 3
    ].reduce<string>((acc, el, i) => {
      const isPlace = placeSearch[i]
      const addPath = isPlace
        ? `&field=${isPlace}`
        : '&field='

      const newPath = acc + addPath
      return newPath
    }, '')

    const searchTypeUrl =
      typeSearch === 'accurate'
        ? 'match_phrase'
        : 'multi_match'

    endpoint = `/${type}?page=${page}&text=${textSearch}&search_type=${searchTypeUrl}${placeSearchUrl}`
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
