import { useLocation } from 'react-router'

export const useGetParamsUrl = () => {
  const { search } = useLocation()

  const queryParams = new URLSearchParams(search)

  const type = queryParams.get('mode') ?? 'all'
  const page = queryParams.get('page') ?? '1'
  const fromId = queryParams.get('from_id') ?? ''
  const toId = queryParams.get('to_id') ?? ''
  const fromPost =
    queryParams.get('from_post') ?? ''
  const toPost = queryParams.get('to_post') ?? ''
  const typeSearch =
    queryParams.get('type_search') ?? ''
  const textSearch =
    queryParams.get('text_search') ?? ''

  const placeSearch =
    queryParams.get('place_search') ?? ''

  return {
    type,
    page,
    fromId,
    toId,
    fromPost,
    toPost,
    typeSearch,
    textSearch,
    placeSearch
  }
}
