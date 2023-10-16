import { createSlice } from '@reduxjs/toolkit'
import { ActionDocument, ActionTotal, StateType } from './documents.types'

const initialState: StateType = {
  documents: [],
  total: 0
}

export const documentsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDocuments: (state, action: ActionDocument) => {
      const newDocuments = action.payload
      return { ...state, documents: newDocuments }
    },
    setTotal: (state, action: ActionTotal) => {
      const newTotal = action.payload
      return { ...state, total: newTotal }
    }
  }
})

export const { setDocuments, setTotal } = documentsSlice.actions
