import { TypeDocument } from '../store/slice'

const url = 'http://localhost:3001'

export type typeForFetch = 'all' | 'filter'

export type ConfFetch = {
  type: typeForFetch
  page: number | string
  fromId: string
  toId: string
  fromPost: string
  toPost: string
}

const transformParams = (params: ConfFetch) => {
  const {
    fromId,
    fromPost,
    page,
    toId,
    toPost,
    type
  } = params
  let endpoint = ''

  if (type === 'all') {
    endpoint = `/${type}?page=${page}`
  }
  if (type === 'filter') {
    endpoint = `/${type}?page=${page}&from_id=${fromId}&to_id=${toId}&from_post=${fromPost}&to_post=${toPost}`
  }

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

  console.log({ params, urlFetch })

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
