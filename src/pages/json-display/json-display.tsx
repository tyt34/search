import { ChangeMode } from '../../components'
import {
  useDocuments,
  useTotal
} from '../../store/hook'

import styles from './json-display.module.scss'
import { useUrlFetch } from '../../hooks'
import { JsonToHtml } from './components'

export const JsonDisplay = () => {
  const total = useTotal()
  const documents = useDocuments()

  console.log({ Tj: total, Dj: documents })

  useUrlFetch()

  return (
    <>
      <ChangeMode />
      <p>JSON:</p>
      <p className={styles.json}>
        {documents.length ? (
          <JsonToHtml json={documents ?? []} />
        ) : null}
      </p>
    </>
  )
}
