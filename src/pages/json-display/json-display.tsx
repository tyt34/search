import { ChangeMode } from '../../components'
import { useDocuments } from '../../store/hook'

import styles from './json-display.module.scss'
import { useUrlFetch } from '../../hooks'
import { JsonToHtml } from './components'

export const JsonDisplay = () => {
  const documents = useDocuments()

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
