import { useEffect } from 'react'
import { getData } from '../api'
import { useAppDispatch } from '../store/hook'
import {
  setDocuments,
  setTotal
} from '../store/slice'

export const useUrlFetch = () => {
  const dispatch = useAppDispatch()

  const getDocuments = async () => {
    const { data, total } = await getData('')
    /**
     * почему DocumentType[] не является DocumentType[]
     */
    dispatch(setDocuments(data as any))
    dispatch(setTotal(total))
  }

  useEffect(() => {
    getDocuments()
  }, [])
}
