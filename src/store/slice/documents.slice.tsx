import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit'

export type TypeDocument = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type KeysDocument = keyof TypeDocument

type ActionTotal = PayloadAction<number>

type ActionDocument = PayloadAction<
  TypeDocument[]
>

type StateType = {
  documents: TypeDocument[]
  total: number
}

const initialState: StateType = {
  documents: [],
  total: 0
}

export const documentsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDocuments: (
      state,
      action: ActionDocument
    ) => {
      const newDocuments = action.payload
      return { ...state, documents: newDocuments }
    },
    setTotal: (state, action: ActionTotal) => {
      const newTotal = action.payload
      return { ...state, total: newTotal }
    }
  }
})

export const { setDocuments, setTotal } =
  documentsSlice.actions
