import { useEffect } from 'react'
import {
  ConfFetch,
  getData,
  typeForFetch
} from '../api'
import { useAppDispatch } from '../store/hook'
import {
  setDocuments,
  setTotal
} from '../store/slice'
import { useGetParamsUrl } from '.'

export const useUrlFetch = () => {
  // const { pathname, search, state } =
  //   useLocation()

  const {
    fromId,
    fromPost,
    page,
    toId,
    toPost,
    type
  } = useGetParamsUrl()

  console.log({ type })
  // const page = numberPage || 1

  const dispatch = useAppDispatch()

  const getDocuments = async () => {
    const settingFetch: ConfFetch = {
      type: type as typeForFetch,
      page,
      fromId,
      toId,
      fromPost,
      toPost
    }
    const { data, total } =
      await getData(settingFetch)
    console.log({ total })

    dispatch(setDocuments(data))
    dispatch(setTotal(total))
  }

  useEffect(() => {
    getDocuments()
  }, [page, type, fromId, toId, fromPost, toPost])

  // getDocuments()
}
