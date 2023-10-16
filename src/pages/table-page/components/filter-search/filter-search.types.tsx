export type SearchType = 'accurate' | 'advanced'

export type FormDataType = {
  idFrom: string
  idTo: string
  postIdFrom: string
  postIdTo: string
  searchText: string
  typeSearch: SearchType
  placeSearch: string[]
}
