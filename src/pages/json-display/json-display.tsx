import { ChangeTypePage } from '../../components'
import { useDocuments } from '../../store/hook'
import styles from './json-display.module.scss'
import { useUrlFetch } from '../../hooks'
import { JsonToHtml } from './components'

export const JsonDisplay = () => {
  const documents = useDocuments()

  useUrlFetch()

  return (
    <>
      <ChangeTypePage />
      <p>JSON:</p>
      <div className={styles.json}>
        {documents.length ? (
          <JsonToHtml json={documents ?? []} />
        ) : null}
      </div>
    </>
  )
}
