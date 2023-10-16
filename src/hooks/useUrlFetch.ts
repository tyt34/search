import { useEffect } from 'react'
import { ConfFetch, typeForFetch } from '../api/api.types'
import { SearchType } from '../pages/table-page/components/filter-search/filter-search.types'
import { getData } from '../api'
import { setDocuments, setTotal } from '../store/slice'
import { splitFieldSearch } from '../constants'
import { useAppDispatch } from '../store/hook'
import { useGetParamsUrl } from '.'

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
      placeSearch: placeSearch.split(splitFieldSearch),
      textSearch,
      toId,
      toPost,
      type: type as typeForFetch,
      typeSearch: typeSearch as SearchType
    }

    const { data, total } = await getData(settingFetch)

    dispatch(setDocuments(data))
    dispatch(setTotal(total))
  }

  useEffect(() => {
    getDocuments()
  }, [
    fromId,
    fromPost,
    page,
    placeSearch,
    textSearch,
    toId,
    toPost,
    type,
    typeSearch
  ])
}
