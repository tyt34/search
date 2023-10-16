import { startTransition, useEffect, useState } from 'react'
import { ButtonRestart } from '../table-page/components'
import { Chip } from '@mui/material'
import { ConfFetch } from '../../api/api.types'
import { KeysDocument, TypeDocument } from '../../store/slice/documents.types'
import { arrKeyDocumentSort, initialState } from './detail.constants'
import { getData } from '../../api'
import { useDocuments } from '../../store/hook'
import { useGetParamsUrl } from '../../hooks'
import { useNavigate } from 'react-router'
import styles from './detail.module.scss'
import { pages } from '../../routes/app-routes.constants'

export const Detail = () => {
  const [document, setDocument] = useState<TypeDocument>(initialState)

  const { id } = useGetParamsUrl()

  const documents = useDocuments()
  const navigate = useNavigate()

  const getDocument = async () => {
    const settingFetch: ConfFetch = {
      fromId: id,
      toId: id,
      type: 'filter',
      page: 1
    }

    const { data } = await getData(settingFetch)
    setDocument(data[0])
  }

  useEffect(() => {
    const isStore = !!documents.length

    if (isStore) {
      const doc = documents.filter(
        (doc: TypeDocument) => doc.id.toString() === id
      )
      setDocument(doc[0])
    } else {
      getDocument()
    }
  }, [])

  const moveToTable = (field: KeysDocument, value: string) => {
    const searchParams = new URLSearchParams()
    const isStrField = ['name', 'email', 'body'].some((el) => el === field)

    if (field === 'id') {
      searchParams.set('mode', 'filter')
      searchParams.set('page', '1')
      searchParams.set('from_id', value)
      searchParams.set('to_id', value)

      startTransition(() => {
        navigate({
          pathname: pages.table.path,
          search: '?' + searchParams.toString()
        })
      })
    }

    if (field === 'postId') {
      searchParams.set('mode', 'filter')
      searchParams.set('page', '1')
      searchParams.set('from_post', value)
      searchParams.set('to_post', value)

      startTransition(() => {
        navigate({
          pathname: pages.table.path,
          search: '?' + searchParams.toString()
        })
      })
    }

    if (isStrField) {
      const clearText = value.split('\n').join(' ')

      searchParams.set('mode', 'search')
      searchParams.set('page', '1')
      searchParams.set('type_search', 'accurate')
      searchParams.set('text_search', clearText)
      searchParams.set('place_search', field)

      startTransition(() => {
        navigate({
          pathname: pages.table.path,
          search: '?' + searchParams.toString()
        })
      })
    }
  }

  return (
    <>
      <ButtonRestart />

      <section className={styles.document}>
        {arrKeyDocumentSort.map((field) => {
          const f = field.toUpperCase()
          const v = document[field as KeysDocument]
          return (
            <div
              className={styles.line}
              key={field}
            >
              <div className={styles.row}>
                <Chip
                  color="primary"
                  label={`${f}:`}
                />
              </div>
              <span
                className={styles.link}
                onClick={() => {
                  moveToTable(field, `${v}`)
                }}
              >
                {v}
              </span>
            </div>
          )
        })}
      </section>
    </>
  )
}
