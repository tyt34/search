import { useEffect, useState } from 'react'
import { ButtonRestart } from '../table-page/components'
import { Chip } from '@mui/material'
import { ConfFetch } from '../../api/api.types'
import { KeysDocument, TypeDocument } from '../../store/slice/documents.types'
import { arrKeyDocumentSort, initialState } from './detail.constants'
import { getData } from '../../api'
import { useDocuments } from '../../store/hook'
import { useGetParamsUrl } from '../../hooks'
import styles from './detail.module.scss'

export const Detail = () => {
  const documents = useDocuments()
  const [document, setDocument] = useState<TypeDocument>(initialState)
  const { id } = useGetParamsUrl()

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
      console.log({ D: doc[0] })
      setDocument(doc[0])
    } else {
      getDocument()
    }
  }, [])

  const moveToTable = (field: KeysDocument, value: string) => {
    console.log({ field, value })
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
