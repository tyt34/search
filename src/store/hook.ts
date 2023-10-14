import { AppDispatch, RootState } from './store'
import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook
} from 'react-redux'

export const useAppDispatch = () =>
  useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector

export const useDocuments = () =>
  useAppSelector((store) => store.data.documents)

export const useTotal = () =>
  useAppSelector((store) => store.data.total)
