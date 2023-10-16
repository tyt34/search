import { useEffect } from 'react'
import {
  ConfFetch,
  getData,
  typeForFetch
} from '../api'
import {
  setDocuments,
  setTotal
} from '../store/slice'
import { useAppDispatch } from '../store/hook'
import { useGetParamsUrl } from '.'
import { SearchType } from '../pages/table-page/components'
import { splitFieldSearch } from '../constants'

export const useUrlFetch = () => {
  const {
    fromId,
    fromPost,
    page,
    textSearch,
    toId,
    toPost,
    type,
    typeSearch,
    placeSearch
  } = useGetParamsUrl()

  const dispatch = useAppDispatch()

  const getDocuments = async () => {
    const settingFetch: ConfFetch = {
      fromId,
      fromPost,
      page,
      textSearch,
      toId,
      toPost,
      type: type as typeForFetch,
      typeSearch: typeSearch as SearchType,
      placeSearch: placeSearch.split(
        splitFieldSearch
      )
    }

    const { data, total } =
      await getData(settingFetch)

    dispatch(setDocuments(data))
    dispatch(setTotal(total))
  }

  useEffect(() => {
    getDocuments()
  }, [
    page,
    type,
    fromId,
    toId,
    fromPost,
    toPost,
    textSearch,
    typeSearch
  ])
}
