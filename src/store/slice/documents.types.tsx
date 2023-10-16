import { PayloadAction } from '@reduxjs/toolkit'

export type TypeDocument = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type KeysDocument = keyof TypeDocument

export type ActionTotal = PayloadAction<number>

export type ActionDocument = PayloadAction<TypeDocument[]>

export type StateType = {
  documents: TypeDocument[]
  total: number
}
