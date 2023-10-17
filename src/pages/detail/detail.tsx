import { useEffect, useState } from 'react'
import { ButtonRestart } from '../../components'
import { ConfFetch } from '../../api/api.types'
import { Row } from './components'
import { TypeDocument } from '../../store/slice/documents.types'
import { arrKeyDocumentSort, initialState } from './detail.constants'
import { getData } from '../../api'
import { hasDataSelector, useDocuments } from '../../store/hook'
import { useGetParamsUrl } from '../../hooks'
import styles from './detail.module.scss'

export const Detail = () => {
  const [document, setDocument] = useState<TypeDocument>(initialState)
  const documents = useDocuments()
  const hasData = hasDataSelector()
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
    if (hasData) {
      const doc = documents.filter(
        (doc: TypeDocument) => doc.id.toString() === id
      )
      setDocument(doc[0])
    } else {
      getDocument()
    }
  }, [])

  return (
    <section className={styles.section}>
      <ButtonRestart />

      <div className={styles.document}>
        {arrKeyDocumentSort.map((field) => {
          const value = document[field].toString()

          return (
            <Row
              key={field}
              field={field}
              value={value}
            />
          )
        })}
      </div>
    </section>
  )
}
