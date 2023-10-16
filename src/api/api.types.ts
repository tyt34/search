import { SearchType } from '../pages/table-page/components/filter-search/filter-search.types'
import { TypeDocument } from '../store/slice/documents.types'

export type typeForFetch = 'all' | 'filter' | 'search' | 'filter_search'

export type DataFetch = {
  data: TypeDocument[]
  total: number
}

export type ConfFetch = {
  fromId: string
  toId: string
  type: typeForFetch
  page: number | string
  fromPost?: string
  toPost?: string
  textSearch?: string
  typeSearch?: SearchType
  placeSearch?: string[]
}
