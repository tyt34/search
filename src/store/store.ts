import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { configureStore } from '@reduxjs/toolkit'
import { documentsSlice } from './slice/documents.slice'

export const store = configureStore({
  reducer: {
    data: documentsSlice.reducer
  }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<
  typeof store.getState
>
export type AppDispatch = typeof store.dispatch
