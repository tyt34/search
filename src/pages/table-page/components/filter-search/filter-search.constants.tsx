import { FormDataType } from './filter-search.types'

export const tooltipTextSearch =
  'This is type for search. Accurate - search by exact word match. Advanced - search by exact match of words, that is, spelling errors and typos are allowed.'

export const initialFormData: FormDataType = {
  idFrom: '',
  idTo: '',
  postIdFrom: '',
  postIdTo: '',
  searchText: '',
  typeSearch: 'accurate',
  placeSearch: ['body', 'name', 'email']
}
