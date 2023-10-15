import { useEffect } from 'react'
import { getData } from '../api'
import { useAppDispatch } from '../store/hook'
import {
  setDocuments,
  setTotal
} from '../store/slice'
import { useLocation } from 'react-router'

export const useUrlFetch = () => {
  const { pathname, search, state } =
    useLocation()

  const queryParams = new URLSearchParams(search)
  const numberPage = queryParams.get('page')
  const page = numberPage || 1

  const dispatch = useAppDispatch()

  const getDocuments = async () => {
    const { data, total } = await getData({
      type: 'all',
      page: page
    })

    dispatch(setDocuments(data))
    dispatch(setTotal(total))
  }

  useEffect(() => {
    getDocuments()
  }, [page])

  // getDocuments()
}
