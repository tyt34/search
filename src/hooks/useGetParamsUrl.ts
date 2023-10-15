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

  return {
    type,
    page,
    fromId,
    toId,
    fromPost,
    toPost
  }
}
