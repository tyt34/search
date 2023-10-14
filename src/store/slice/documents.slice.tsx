import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit'

export type DocumentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

type ActionTotal = PayloadAction<number>

type ActionDocument = PayloadAction<
  DocumentType[]
>

type StateType = {
  documents: DocumentType[]
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
