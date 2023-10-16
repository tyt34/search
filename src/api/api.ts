import { headers, urlBack } from '../constants'
import { ConfFetch, DataFetch } from './api.types'
import { transformParams } from './api.utils'

export const getData = async (params: ConfFetch): Promise<DataFetch> => {
  const urlFetch = urlBack + transformParams(params)

  const res = await fetch(urlFetch, {
    method: 'GET',
    headers: headers
  })

  const json = await res.json()

  return json
}
