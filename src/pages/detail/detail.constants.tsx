import { KeysDocument, TypeDocument } from '../../store/slice/documents.types'

export const initialState: TypeDocument = {
  body: '',
  email: '',
  id: 0,
  name: '',
  postId: 0
}

export const arrKeyDocumentSort: KeysDocument[] = [
  'id',
  'postId',
  'name',
  'email',
  'body'
]
