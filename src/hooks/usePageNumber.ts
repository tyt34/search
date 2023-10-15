import { useLocation } from 'react-router-dom'

export const usePageNumber = () => {
  const { search } = useLocation()

  const queryParams = new URLSearchParams(search)
  const numberPage = queryParams.get('page')
  const page = numberPage || 1

  return { page }
}
