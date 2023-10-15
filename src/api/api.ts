import { TypeDocument } from '../store/slice'

const url = 'http://localhost:3001'

const transformParams = (params: any) => {
  console.log({ params })
  return '/all?page=1'
}

type DataFetch = {
  data: TypeDocument[]
  total: number
}

export const getData = async (
  params: any
): Promise<DataFetch> => {
  console.log({ params })

  const res = await fetch(
    url + transformParams(params),
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )

  const json = await res.json()

  return json
}
