import { TypeDocument } from '../store/slice'

const url = 'http://localhost:3001'

type ConfFetch = {
  type: 'all'
  page: number | string
}

const transformParams = (params: ConfFetch) => {
  const typeSearch = params.type
  const numPage = params.page

  return `/${typeSearch}?page=${numPage}`
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
